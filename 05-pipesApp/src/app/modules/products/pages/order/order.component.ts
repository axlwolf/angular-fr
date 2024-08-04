import { Component, type OnInit } from '@angular/core';
import { Product } from '../../interfaces/product';
import { ProductService } from '../../services/product-service';
import { Color, Hero } from '../../interfaces/hero';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  providers: [ProductService],
  styles: `
    :host {
      display: block;
    }
  `,
})
export class OrderComponent implements OnInit {
  public isUppercase: boolean = false;
  public products!: Product[];
  public heroes!: Hero[];

  public orderBy?: keyof Hero;

  constructor(public productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProductsMini().then(data => {
      this.products = data;
    });

    this.heroes = [
      {
        name: "Superman",
        canFly: true,
        color: Color.blue
      },
      {
        name: "Batman",
        canFly: false,
        color: Color.black
      },
      {
        name: "Flash",
        canFly: false,
        color: Color.red
      },
      {
        name: "Green Lantern",
        canFly: true,
        color: Color.green
      }
    ];
  }

  toggleUppercase(e: any): void {
    console.log({ e })
    this.isUppercase = !this.isUppercase;
  }

  changeOrder(value: keyof Hero): void {
    this.orderBy = value;
  }

}
