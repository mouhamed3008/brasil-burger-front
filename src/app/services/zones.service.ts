import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Commande } from '../models/commande';
import { Zones } from '../models/zones';

@Injectable({
  providedIn: 'root'
})
export class ZonesService {

  constructor(private http: HttpClient) { }

  getZones():Observable<Zones[]> {
    return this.http.get<Zones[]>(environment.apiUrl + 'zones')
  }


  getZonesCmd():Observable<Zones[]>{
    return this.http.get<Zones[]>(environment.apiUrl + 'zonesC')

  }

  getZoneCmds(id:number):Observable<Commande[]>{
    return this.http.get<Commande[]>(environment.apiUrl + 'zonesC/'+id)

  }



}
