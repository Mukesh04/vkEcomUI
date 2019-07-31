import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/modals/product.model';
import { ProductService } from '../../shared/services/product.service';


@Component({
  selector: 'app-home-four',
  templateUrl: './home-four.component.html',
  styleUrls: ['./home-four.component.sass']
})
export class HomeFourComponent implements OnInit {

  products: Product[];
  public banners = [];
  public slides = [
    { title: 'Huge sale', subtitle: 'Up to 70%', image: 'assets/images/carousel/banner1.jpg' },
    { title: 'Biggest discount', subtitle: 'Check the promotion', image: 'assets/images/carousel/banner2.jpg' },
    { title: 'Biggest sale', subtitle: 'Dont miss it', image: 'assets/images/carousel/banner3.jpg' },
    { title: 'Our best products', subtitle: 'Special selection', image: 'assets/images/carousel/banner4.jpg' },
    { title: 'Massive sale', subtitle: 'Only for today', image: 'assets/images/carousel/banner5.jpg' }
  ];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getBanners()
    .subscribe(
      data => this.banners = data
    );

 this.productService.getProducts()
 .subscribe(
   (product: Product[]) => {
     this.products = product
   }
 )

}

}
