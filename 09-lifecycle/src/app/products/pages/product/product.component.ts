import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges, OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'product-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit, OnChanges, DoCheck, AfterViewInit, AfterContentInit, AfterContentChecked, AfterViewChecked, OnDestroy {
  public isProductVisible: boolean = false;
  public currentPrice: number = 10;

  constructor() {
    console.log('Constructor.');

  }

  ngOnInit(): void {
    console.log('ngOnInit.');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked.');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit.');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit.');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked.');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck.');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log({changes})
    console.log('ngOnChanges.');
  }


  ngOnDestroy(): void {
    console.log('ngOnDestroy.');
  }

  increaseCurrentPrice () {
    this.currentPrice++;
  }

}
