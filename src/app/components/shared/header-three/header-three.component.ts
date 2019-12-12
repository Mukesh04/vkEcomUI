import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/modals/product.model';
import { CartItem } from 'src/app/modals/cart-item';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-header-three',
  templateUrl: './header-three.component.html',
  styleUrls: ['./header-three.component.sass']
})
export class HeaderThreeComponent implements OnInit {

  public sidenavMenuItems: Array<any>;

  products: Product[];
  indexProduct: number;
  shoppingCartItems: CartItem[] = [];

  constructor(private cartService: CartService) {
    this.cartService.getItems().subscribe(shoppingCartItems => this.shoppingCartItems = shoppingCartItems);
  }

  ngOnInit() {}
}
