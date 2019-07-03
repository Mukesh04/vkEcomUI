import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/modals/product.model';

@Component({
  selector: 'app-product-carousel',
  templateUrl: './product-carousel.component.html',
  styleUrls: ['./product-carousel.component.sass']
})
export class ProductCarouselComponent implements OnInit {

  product: Array<Product> = [];

  constructor() { }

  ngOnInit() {
  }

}
