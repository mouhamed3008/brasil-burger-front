import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Products } from 'src/app/models/products';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-catalogue-item',
  templateUrl: './catalogue-item.component.html',
  styleUrls: ['./catalogue-item.component.css']
})
export class CatalogueItemComponent implements OnInit {

  @Input() product!: Products ;
  @Output() detail: EventEmitter<Products> = new EventEmitter<Products>;
  is_deactivated: boolean = false;

  constructor(private cartService: CartService, private sanitizer:DomSanitizer) {


  }



  ngOnInit(): void {
  }


  addtocart(item: Products ): void {
    this.cartService.addToCart(item, "add");
    this.is_deactivated =true;

  }

  transform(img:string){
    return this.sanitizer.bypassSecurityTrustResourceUrl(img);
}


}
