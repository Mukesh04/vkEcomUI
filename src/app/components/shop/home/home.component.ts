import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../shared/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  public banners = [];
  public slides = [
    { title: 'The biggest sale', subtitle: 'Special for today', image: '../../../assets/images/carousel/banner1.jpg' },
    { title: 'Summer collection', subtitle: 'New Arrivals On Sale', image: '../../../assets/images/carousel/banner2.jpg' },
    { title: 'The biggest sale', subtitle: 'Special for today', image: '../../../assets/images/carousel/banner3.jpg' },
    { title: 'Summer collection', subtitle: 'New Arrivals On Sale', image: '../../../assets/images/carousel/banner4.jpg' },
    { title: 'The biggest sale', subtitle: 'Special for today', image: '../../../assets/images/carousel/banner5.jpg' }
  ];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getBanners()
    .subscribe(
      data => this.banners = data
    )
  }






}
