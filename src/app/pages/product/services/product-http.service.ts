import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ProductHttpRequest } from '../models/productHttpRequest';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductHttpService {
  productApi = `${environment.productApi}/products`;

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<any> {
    return this.http.get<any>(this.productApi);
  }

  getOneProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.productApi}/${id}`);
  }

  postProduct(product: Product) {
    return this.http.post(this.productApi, product);
  }

  putProduct(model: Product): Observable<Product> {
    return this.http.put<Product>(`${this.productApi}/${model.id}`, model);
  }

  deleteProduct(id: number) {
    return this.http.delete(`${this.productApi}/${id}`);
  }
}
