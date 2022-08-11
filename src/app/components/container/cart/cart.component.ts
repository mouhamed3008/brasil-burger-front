import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Commande } from 'src/app/models/commande';
import { Products } from 'src/app/models/products';
import { CartService } from 'src/app/services/cart.service';
import { CommandesService } from 'src/app/services/commandes.service';
import { ZonesService } from 'src/app/services/zones.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


   products : Products[] = [];
   grandTotal !: number;
   zones:any[]=[]
   commande!:any
   commandeTab:any[]=[]
   togglezone:boolean = false
   check:boolean = false
   zone!:number
  constructor(
    private cartService : CartService,
    private sanitizer:DomSanitizer,
    private zoneServices:ZonesService,
    private commandeService:CommandesService,
    private router: Router
    ) { }
  items$ = this.cartService.items$;


  ngOnInit(): void {
    this.items$.subscribe(res=>{
      this.products = res;
    console.log('====================================');
    console.log(this.products);
    console.log('====================================');

  });
  this.zoneServices.getZones().subscribe(
    res=>{
      this.zones = res
    }
  )

  }

  getTotal(): number {
    let total = 0;
    this.products.forEach(product => {
      total += product.prix * product?.qty
    })
    return total
  }
  removeItem(item: Products){
    this.cartService.removeCartItem(item);
  }

  addTocart(item: Products, toDo:string): void {
     this.cartService.addToCart(item, toDo);

  }

  transform(img:string){
    return this.sanitizer.bypassSecurityTrustResourceUrl(img);
  }

  addCommande(){
    this.items$.subscribe(items =>{
      items.forEach((item,i) =>{

          this.commandeTab.push({
              qty:item.qty,
              products:{id:item.id},
              // components:[
              //   {
              //     boisson:{id:item.composant[i].id},
              //     qty:item.composant[i].qty
              //   }
              // ]
          })


        })
        console.log("tab"+this.commandeTab);
      })

      if (this.zone) {
        this.commande= {
          client:{id:2},
          produits:this.commandeTab,
          zone:{id:this.zone}

        }
      }else{
        this.commande= {
          client:{id:2},
          produits:this.commandeTab,

        }
      }


   this.commandeService.addCommande(this.commande).subscribe(res=>{
    this.cartService.removeCart()
    this.router.navigate(['/commandes/'+res.id])

    });



  }

  toggleZone(choice:string, id:number= 0) {

    this.togglezone = choice=== "zone" ? true : false
    if (choice==="zone" && id>0 ) {
      this.check = true
      this.zone = id
    }else if( choice==="place" ){
      this.check = id==0 ?true:false


    }else{
      this.check = false

    }

    console.log(this.zone);
  }


}
