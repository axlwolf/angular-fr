import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Country, Region, SmallCountry } from '../country.interfaces';

import {combineLatest, map, Observable, of, tap} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private _baseUrl: string = 'https://restcountries.com/v3.1';

  private _regions: Region[] = [
    Region.Africa,
    Region.Americas,
    Region.Asia,
    Region.Europe,
    Region.Oceania,
  ];

  get regions(): Region[] {
    return [...this._regions];
  }

  constructor(private http: HttpClient) {}

  getCountriesByRegion(region: Region): Observable<SmallCountry[]> {
    if (!region) return of([]);
    const url: string = `${this._baseUrl}/region/${region}?fields=cca3,name,borders`;
    return this.http.get<Country[]>(url).pipe(
      map((countries) =>
        countries.map((country) => ({
          name: country.name?.common,
          cca3: country.cca3,
          borders: country.borders ?? [],
        }))
      ),
      tap((response) => console.log({ response }))
    );
  }

  getCountryByAlphaCode(alphaCode: string): Observable<SmallCountry> {
    const url = `${this._baseUrl}/alpha/${alphaCode}?fields=cca3,name,borders`;
    return this.http.get<Country>(url).pipe(
      map((country) => ({
        name: country.name.common,
        cca3: country.cca3,
        borders: country.borders ?? [],
      }))
    );
  }

  getCountriesBordersByCodes(borders: string[]): Observable<SmallCountry[]> {
    //restcountries.com/v3.1/region/europe?fields=cca3,name,borders
    if(!borders || borders.length === 0) return of([]);

    const countriesRequests: Observable<SmallCountry>[] = [];

    borders.forEach((code) => {
      const request = this.getCountryByAlphaCode(code);

      countriesRequests.push(request);
    })

    return combineLatest(countriesRequests);
  }
}
