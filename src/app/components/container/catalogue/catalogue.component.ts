import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { from, Observable, partition, Subscription } from 'rxjs';
import { Products } from 'src/app/models/products';
import { CataloguesService } from 'src/app/services/catalogues.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {


  productsBurger: Products[]=[];
  productsMenu: Products[]=[];
  catalogueSubscribed : Subscription | undefined;
  searchFilter!:string;
  searchKey:string ="";
  filterType:Products[]=[];
  is_menu_visible:boolean=true;
  is_burger_visible:boolean=true;
  tab:Products[]=[]

  isDisplayModal:boolean = false;
  modalProduct: Products | undefined;

  constructor(private catalogueService: CataloguesService, private sanitizer:DomSanitizer) {

  }



  ngOnInit(): void {
    const observable = this.catalogueService.getCatalogues();

    observable.subscribe(
      produits=>{
        this.tab = produits
        const [burgers, menus]= partition(from(produits), (catalogue: any) => catalogue.type.libelle.toUpperCase() == 'BURGER')
        burgers.subscribe(burger=>{this.productsBurger.push(burger)});
        menus.subscribe(menus=>{this.productsMenu.push(menus)})
      });

    this.catalogueService.search.subscribe((val:any)=>{

      this.searchKey = val;
    })

  }


  displayViewModal(products: Products ){

    if (products) {
      this.isDisplayModal = true;
      this.modalProduct = products
    }

  }


  transform(img:string){
    return this.sanitizer.bypassSecurityTrustResourceUrl(img);
}


search(event:any){
  this.searchFilter = (event.target as HTMLInputElement).value;
  console.log(this.searchFilter);
  this.catalogueService.search.next(this.searchFilter);
}


filter(search:any) {
  if (search.value ==='BURGER'){
    this.is_burger_visible = true
    this.is_menu_visible = !this.is_menu_visible
    this.filterType = this.productsBurger
    .filter((a:any)=>{
      if(a.type.libelle == search ){
        console.log(a);

        return a;
      }
    })
  }else if (search.value ==='MENU'){
this.is_menu_visible = true
    this.is_burger_visible = !this.is_burger_visible
    this.filterType = this.productsMenu
    .filter((a:any)=>{
      if(a.type.libelle == search ){
        console.log(a);

        return a;
      }
    })

}else{
  this.is_menu_visible = true
  this.is_burger_visible = true


}
}
Burger:Products[] = this.productsBurger;
Menu:Products[] = this.productsMenu;

filterPrice(search:any) {

  const resultMenu:Products[] =[];
  const resultBurger:Products[] =[];


console.log(search.value)

this.tab
    .filter((a:any)=>{
      if(a.prix.toString() == search.value && a.type.libelle == "MENU"){

        resultMenu.push(a)
      }else if(a.prix.toString() == search.value && a.type.libelle == "BURGER"){
        resultBurger.push(a)
      }
    })


    if(search.value !== "ALL"){
      this.productsMenu= resultMenu
      this.productsBurger= resultBurger
    }else if(search.value === "ALL"){
      this.productsMenu= this.Menu
      this.productsBurger= this.Burger
      console.log(this.productsMenu, this.productsBurger)
    }

}


}
