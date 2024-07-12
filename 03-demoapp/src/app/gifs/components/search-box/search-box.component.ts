import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from './../../services/gifs.service';

@Component({
    selector: 'gifs-search-box',
    template: `
        <h5>Buscar:</h5>
        <input type="text" class="form-control" (keyup.enter)="searchTag()" #txtTaginput placeholder="Buscar gifs...">
    `
})

export class SearchBoxComponent implements OnInit {
    @ViewChild('txtTaginput')
    public tagInput!:ElementRef<HTMLInputElement>;

    constructor(private gifsService: GifsService) { }

    ngOnInit() { }

    searchTag() {
        const newTag = this.tagInput.nativeElement.value;
        console.log({ newTag });
        this.gifsService.searchTag(newTag);
        this.tagInput.nativeElement.value = '';
    }
}