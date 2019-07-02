import { Component, OnInit } from '@angular/core';
import {Product} from "../../modals/product.model";
import {CartItem} from "../../modals/cart-item";
import {ProductService} from "../shared/services/product.service";
import {CartService} from "../shared/services/cart.service";
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {
  products: Product[];
  public banners = [];

  shoppingCartItems: CartItem[] = [];
  wishlistItems  :   Product[] = [];

  public url : any;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.url = event.url;
      }
    } )
  }

  ngOnInit() {
  }

}
