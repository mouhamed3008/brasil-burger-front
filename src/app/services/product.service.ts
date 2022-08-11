import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Products } from '../models/products';
import { TailleBoisson } from '../models/tailleBoisson';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }



  getProduct(id:number): Observable<Products> {
    return this.http.get<Products>(environment.apiUrl + "products/"+id);
  }

  getBoisson(id:number): Observable<TailleBoisson[]>{
    return this.http.get<TailleBoisson[]>(environment.apiUrl + "products/"+id+"/type_tailles");

  }
}
