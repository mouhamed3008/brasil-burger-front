import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Products } from '../models/products';



@Injectable({
  providedIn: 'root'
})
export class CataloguesService {
  private products: Products[]=[]

  public search = new BehaviorSubject<string>("");

  constructor(private http: HttpClient) { }


  getCatalogues(): Observable<Products[]> {
    return this.http.get<Products[]>(environment.apiUrl + 'catalogues');
  }


  getComplement(): Observable<Products[]> {
    return this.http.get<Products[]>(environment.apiUrl + 'complements');
  }






}
