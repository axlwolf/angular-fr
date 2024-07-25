import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';
import { Region } from '../../interfaces/region.type';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: `
    .btn-primary {
      margin-right: 5px;
      color: white;
    }
  `
})
export class ByRegionPageComponent implements OnInit {
  public countries: Country[] = [];
  public isLoading: boolean = false;
  public regions: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  public selectedRegion?: Region = '';
  public initialValue: string = '';

  constructor(private coutriesService: CountriesService) { }

  ngOnInit(): void {
    this.countries = this.coutriesService.cacheStore.byRegion.countries;
    this.selectedRegion = this.coutriesService.cacheStore.byRegion.region;
  }

  searchByRegion(region: Region) {
    this.isLoading = true;
    this.selectedRegion = region;
    this.coutriesService.searchRegion(region).subscribe(countries => {
      this.countries = countries;
      setTimeout(() => {
        this.isLoading = false;
      });

    });
  }
}
