import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class ProductService {


  public url = "assets/data/banners.json";

  constructor(private httpClient: HttpClient) {
  }

  public banners(): Observable<any[]>{
    return this.httpClient.get<any[]>(this.url);
  }
    // Get Banners
    public getBanners() {
      return this.banners();
    }


}
