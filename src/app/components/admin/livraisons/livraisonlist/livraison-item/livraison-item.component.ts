import { Component, Input, OnInit } from '@angular/core';
import { Zones } from 'src/app/models/zones';

@Component({
  selector: 'app-livraison-item',
  templateUrl: './livraison-item.component.html',
  styleUrls: ['./livraison-item.component.css']
})
export class LivraisonItemComponent implements OnInit {
  @Input()
    zone!:Zones
  constructor() { }

  ngOnInit(): void {

  }

}
