import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

   totalItem : number = 0;
   searchTerm !: string;
  constructor(private cartService : CartService) { }
  items$ = this.cartService.items$;

  ngOnInit(): void {
    // this.cartService.getProducts()
    // .subscribe(res=>{
    //   this.totalItem = res.length;
    // })

    this.cartService.panier()
    .subscribe(res=>{
      this.totalItem = res.length;
    })


  }

}
