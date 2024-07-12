import { Component, Input, OnInit } from '@angular/core';


@Component({
    selector: 'shared-lazy-image',
    template: `
    <picture class="d-flex justify-content-center">

        <img 
        [src]="url" 
        [alt]="alt" 
        class="card-img-top animate__animated animate__fadeIn" 
        (load)="onLoad()" 
        [ngStyle]="{'display': hasLoaded ? '' : 'none'}">

        <img 
        *ngIf="!hasLoaded" 
        src="assets/loader.svg" 
        alt="" 
        height="35"
        width="35"
        class="mt-3">

    </picture>
`,
    styleUrl: './lazyImage.component.scss'
})
export class LazyImageComponent implements OnInit {
    @Input()
    public url!: string;

    @Input()
    public alt: string = '';

    public hasLoaded: boolean = false;

    ngOnInit(): void {
        if (!this.url) throw new Error('URL property is required');
        if (!this.alt) throw new Error('alt property is required');
    }

    onLoad() {
        console.log('Image loaded!');
        this.hasLoaded = true;
    }
}
