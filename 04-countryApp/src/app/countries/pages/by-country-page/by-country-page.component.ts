import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent implements OnInit{
  public countries: Country[] = [];
  public isLoading: boolean = false;
  public initialValue: string = '';

  constructor(private coutriesService: CountriesService) { }
  
  ngOnInit(): void {
    this.countries = this.coutriesService.cacheStore.byName.countries;
    this.initialValue = this.coutriesService.cacheStore.byName.term;
  }

  searchByCountry(term: string) {
    this.isLoading = true;

    this.coutriesService.searchCountry(term).subscribe(countries => {
      this.countries = countries;
      setTimeout(() => {
        this.isLoading = false;
      });

    });
  }
}
