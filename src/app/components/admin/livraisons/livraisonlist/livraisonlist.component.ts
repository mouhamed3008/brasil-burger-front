import { Component, OnInit } from '@angular/core';
import { Zones } from 'src/app/models/zones';
import { ZonesService } from 'src/app/services/zones.service';

@Component({
  selector: 'app-livraisonlist',
  templateUrl: './livraisonlist.component.html',
  styleUrls: ['./livraisonlist.component.css']
})
export class LivraisonlistComponent implements OnInit {

  zones:Zones[]=[];
  constructor(private zoneServices:ZonesService) { }

  ngOnInit(): void {

    this.zoneServices.getZonesCmd().subscribe(
      zone => {
          this.zones = zone
          console.log(zone);

      }
    )
  }

}
