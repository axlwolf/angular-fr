import {Component, OnChanges, OnDestroy, OnInit, SimpleChanges, Input} from '@angular/core';
import {interval, Subscription} from "rxjs";

@Component({
  selector: 'product-price',
  templateUrl: './price.component.html',
  styleUrl: './price.component.scss'
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy {
  @Input()
  public price: number | undefined = 0;
  public interval$?: Subscription;

  ngOnInit(): void {
    console.log('PriceComponent: ngOnInit');
    this.interval$ = interval(1000).subscribe((value) => console.log(`Tik: ${value}`));
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log({priceComponentChanges: changes});
    console.log('PriceComponent: ngOnChanges');
  }

  ngOnDestroy(): void {
    console.log('PriceComponent: ngOnDestroy');
    this.interval$?.unsubscribe();
  }

}
