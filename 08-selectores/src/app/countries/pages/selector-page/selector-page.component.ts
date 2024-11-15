import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CountriesService} from '../../services/countries.service';
import {Region, SmallCountry} from '../../country.interfaces';
import {filter, switchMap, tap} from 'rxjs';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styles: ``,
})
export class SelectorPageComponent implements OnInit, OnDestroy {
  public countriesByRegion: SmallCountry[] = [];
  public borders: SmallCountry[] = [];

  public myForm: FormGroup = this.fb.group({
    region: ['', Validators.required],
    country: ['', Validators.required],
    border: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private countriesService: CountriesService
  ) {
  }

  ngOnInit(): void {
    this.onRegionChanged();
    this.onCountryChanged();
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.myForm.reset();
  }

  get regions(): Region[] {
    return this.countriesService.regions;
  }

  onRegionChanged(): void {
    this.myForm
      .get('region')!
      .valueChanges.pipe(
      tap(() => this.myForm.get('country')!.setValue('')),
      tap(() => this.borders = []),
      switchMap((region) =>
        this.countriesService.getCountriesByRegion(region)
      ),
    )
      .subscribe((countries) => {
        // this.countriesService.getCountriesByRegion(region)
        // console.log({countries: countries});
        this.countriesByRegion = countries;
      });
  }

  onCountryChanged(): void {
    this.myForm
      .get('country')!
      .valueChanges.pipe(
      tap(() => this.myForm.get('border')!.setValue('')),
      filter((value: string) => value.trim().length > 0),
      switchMap((alphaCode) =>
        this.countriesService.getCountryByAlphaCode(alphaCode)
      ),
      switchMap(country =>
        this.countriesService.getCountriesBordersByCodes(country.borders)
      )
    ).subscribe((countries) => {
       console.log({borders: countries});
       this.borders = countries;
    })
  }
}
