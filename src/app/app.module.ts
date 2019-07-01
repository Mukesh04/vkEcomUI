import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DemoComponent } from './components/demo/demo.component';
import { BlogColumnComponent } from './components/blog/blog-column/blog-column.component';
import { BlogDetailsComponent } from './components/blog/blog-details/blog-details.component';
import { BlogListComponent } from './components/blog/blog-list/blog-list.component';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';
import { CartComponent } from './components/pages/cart/cart.component';
import { CheckoutComponent } from './components/pages/checkout/checkout.component';
import { CompareComponent } from './components/pages/compare/compare.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { ErrorPageComponent } from './components/pages/error-page/error-page.component';
import { FaqComponent } from './components/pages/faq/faq.component';
import { MyAccountComponent } from './components/pages/my-account/my-account.component';
import { WishlistComponent } from './components/pages/wishlist/wishlist.component';
import { MainComponent } from './components/main/main.component';
import { BannersComponent } from './components/shared/banners/banners.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { HeaderTwoComponent } from './components/shared/header-two/header-two.component';
import { MenuComponent } from './components/shared/menu/menu.component';
import { ShoppingWidgetsComponent } from './components/shared/shopping-widgets/shopping-widgets.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { HomeComponent } from './components/shop/home/home.component';
import { HomeTwoComponent } from './components/shop/home-two/home-two.component';
import { HomeThreeComponent } from './components/shop/home-three/home-three.component';
import { ProductsComponent } from './components/shop/products/products.component';
import { PriceComponent } from './components/shop/products/price/price.component';
import { ProductComponent } from './components/shop/products/product/product.component';
import { ProductDetailsComponent } from './components/shop/products/product-details/product-details.component';
import { ProductDialogComponent } from './components/shop/products/product-dialog/product-dialog.component';
import { ProductLeftSidebarComponent } from './components/shop/products/product-left-sidebar/product-left-sidebar.component';
import { ProductVerticalComponent } from './components/shop/products/product-vertical/product-vertical.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    BlogColumnComponent,
    BlogDetailsComponent,
    BlogListComponent,
    AboutUsComponent,
    CartComponent,
    CheckoutComponent,
    CompareComponent,
    ContactComponent,
    ErrorPageComponent,
    FaqComponent,
    MyAccountComponent,
    WishlistComponent,
    MainComponent,
    BannersComponent,
    FooterComponent,
    HeaderComponent,
    HeaderTwoComponent,
    MenuComponent,
    ShoppingWidgetsComponent,
    SidebarComponent,
    HomeComponent,
    HomeTwoComponent,
    HomeThreeComponent,
    ProductsComponent,
    PriceComponent,
    ProductComponent,
    ProductDetailsComponent,
    ProductDialogComponent,
    ProductLeftSidebarComponent,
    ProductVerticalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
