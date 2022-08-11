import { Component, Input, OnInit } from '@angular/core'
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, ParamMap, Router } from '@angular/router'
import { from, partition } from 'rxjs';
import { Products } from 'src/app/models/products'
import { TailleBoisson } from 'src/app/models/tailleBoisson';
import { CartService } from 'src/app/services/cart.service';
import { CataloguesService } from 'src/app/services/catalogues.service'
import { ProductService } from 'src/app/services/product.service';
import { ZonesService } from 'src/app/services/zones.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
   product!: Products ;
   boissons:TailleBoisson[]=[]
    qty = 0;
    is_active: boolean=false;
    show_boisson = false;
    component:TailleBoisson[]=[]

    productsBurger:Products[]=[]
    productsMenu:Products[]=[]
    id:any
  constructor(
    private route : ActivatedRoute,
    private productService: ProductService,
    private router: Router,
    private cartService: CartService,
    private sanitizer:DomSanitizer,
    private catalogueService: CataloguesService
    ) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe((params : ParamMap)=> {
      this.id= params.get('id');
      this.getProduct(this.id)

    });
    // if (this.id) {
    //   console.log(this.getProduct(this.id));

    // }

    const observable = this.catalogueService.getCatalogues();
    observable.subscribe(
      produits=>{
        const [burgers, menus]= partition(from(produits), (catalogue: any) => catalogue.type.libelle.toUpperCase() == 'BURGER')
        burgers.subscribe(burger=>{this.productsBurger.push(burger)});
        menus.subscribe(menus=>{this.productsMenu.push(menus)})
      }



    );


  }

  getProduct(id: number): void {
    this.productService.getProduct(id).subscribe(
      product => {this.product = product;}
      )
      // this.router.navigate(['/catalogue'+this.id])

    }


  addTocart(item: Products ): void {
    // console.log(this.component);

    this.cartService.addToCart(item, "add", this.component);
    // this.cartService.addToCart(item, "add");

  }

  getBoisson(id:number, qty:number): void {
  this.productService.getBoisson(id).subscribe(
    res => {
      this.boissons = res
      this.boissons.forEach(boiss => {
        boiss.qty = 0
      })
    }
    );
    this.show_boisson = !this.show_boisson
    this.qty = qty

  }

  stepUp(prod:TailleBoisson, product:Products) {
    let find = false;
    let index=0
    let somme=0
    if (this.component.length > 0) {
          this.component.forEach((comp,i )=>{
              somme += comp.qty
              console.log(this.qty ,"somm"+somme);
              if (comp.id == prod.id) {
                  find = true;
                  index=i
              }
          })

          if (find) {
            if (this.qty > somme) {
              prod.qty++
            this.component[index] = prod
            }else {
            this.component[index] = prod
            }

          }else{
            if (this.qty > somme) {

              this.component.push(prod)
            }
          }
    }else{
      prod.qty++
      this.component.push(prod)
    }
   console.log(this.component);
   this.is_active = somme == this.qty ? true : false

  }





  stepDown(prod:TailleBoisson) {
    let find = false;
    let index=0
    let somme=0

          this.component.forEach((comp,i )=>{
              somme += comp.qty
              console.log(this.qty ,"somm"+somme);
              if (comp.id == prod.id) {
                  find = true;
                  index=i
              }
          })

          if (find) {
            if (prod.qty>0) {
              prod.qty--
            this.component[index] = prod
            }else if (prod.qty==0){
            this.component.splice(index,1)
            }

          }else{
            if (prod.qty>0) {
              prod.qty--
              this.component.push(prod)
            }
          }
          if (somme ==0) {
            this.component = []
            this.is_active = false
          }

   console.log(this.component);
   this.is_active = somme == this.qty ? true : false

  }




  transform(img:string){
    return this.sanitizer.bypassSecurityTrustResourceUrl(img);
  }



}
