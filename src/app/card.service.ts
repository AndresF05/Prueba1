import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const URL = 'https://api.escuelajs.co/api/v1/products';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private http: HttpClient) { }



  getProducts(){
    return this.http.get(URL);
  }

  addProduct(products: any){
    return this.http.post(URL, products);
  }

  createProduct(products: any) {
    return this.http.post(URL, products);
  }

}

 