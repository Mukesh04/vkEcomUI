import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/modals/product.model';




@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _url: string = "assets/data/";
  public url = "assets/data/banners.json";

  constructor(private httpClient: HttpClient) {
  }

  private products(): Observable<Product[]> {
    return this.httpClient.get<Product[]>('assets/data/products2.json');
  }

  public banners(): Observable<any[]>{
    return this.httpClient.get<any[]>(this.url);
  }


    // Get Banners
    public getBanners() {
      return this.banners();
    }

    // Get Banners
    public getProducts(): Observable<Product[]> {
      return this.products();
    }

}
