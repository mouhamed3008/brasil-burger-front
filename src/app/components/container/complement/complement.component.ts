import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { from, partition } from 'rxjs';
import { Products } from 'src/app/models/products';
import { CartService } from 'src/app/services/cart.service';
import { CataloguesService } from 'src/app/services/catalogues.service';

@Component({
  selector: 'app-complement',
  templateUrl: './complement.component.html',
  styleUrls: ['./complement.component.css']
})
export class ComplementComponent implements OnInit {

  complementBoisson: Products[]=[];
  complementFrites: Products[]=[];
  constructor(
    private catalogueService: CataloguesService,
    private sanitizer:DomSanitizer,
    private cartService : CartService) { }

  ngOnInit(): void {
    const observable = this.catalogueService.getComplement();
    observable.subscribe(
      produits=>{
        const [boissons, frites]= partition(from(produits), (catalogue: any) => catalogue.type.libelle == 'BOISSON')
        boissons.subscribe(boissons=>{this.complementBoisson.push(boissons)});
        frites.subscribe(frites=>{this.complementFrites.push(frites)})
      }



      );
      console.log(this.complementBoisson);


}

transform(img:string){
  return this.sanitizer.bypassSecurityTrustResourceUrl(img);
}


addTocart(item: Products ): void {
  // console.log(this.component);

  this.cartService.addToCart(item, "add");
  // this.cartService.addToCart(item, "add");

}
}
