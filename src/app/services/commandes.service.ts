import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Commande } from '../models/commande';

@Injectable({
  providedIn: 'root'
})
export class CommandesService {

  constructor(private http:HttpClient) { }


  addCommande(data:object): Observable<any> {
    console.log("data"+data);

    return this.http.post<any>(environment.apiUrl+ "commandes", data)
  }

  getClientCommandes(id:number): Observable<Commande[]> {
    return this.http.get<Commande[]>(environment.apiUrl+ "clients/"+id+"/commandes")
  }

  getCommande(id:number): Observable<Commande>{
    return this.http.get<Commande>(environment.apiUrl+ "commandes/"+id);
  }

  annulerCmd(id:number, statusC:string="annuler"): Observable<Commande>{
    return this.http.put<Commande>(environment.apiUrl+"commandes/"+id, {
      status: statusC,
    });

  }

  getCommandes(): Observable<Commande[]>{
    return this.http.get<Commande[]>(environment.apiUrl+ "commandes")

  }

  getLivreurs(): Observable<any>{
    return this.http.get<any>(environment.apiUrl+ "livreurs?is_disponible=true");

  }

  commander(data:object): Observable<any>{
    return this.http.post<any>(environment.apiUrl+ "livraisons", data)

  }
}
