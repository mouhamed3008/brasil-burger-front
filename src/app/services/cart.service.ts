
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Products } from '../models/products';
import { take, map } from 'rxjs/operators';
import { TailleBoisson } from '../models/tailleBoisson';
import { Commande } from '../models/commande';

@Injectable({
  providedIn: 'root'
})
export class CartService {


  private itemsSubject = new BehaviorSubject<Products[]>([]);



  items$ = this.itemsSubject.asObservable();
  quantity =1


  constructor() {
    let existingCartItems = JSON.parse(localStorage.getItem('products') || '[]');
    if (!existingCartItems) {
      existingCartItems = [];
    }
    this.itemsSubject.next(existingCartItems);
  }


  // addToCart(product: Products, toDo:string):void {
  //   let index = 0
  //   let found = false;
  //   this.items$.pipe(
  //     take(1),
  //     map((products:Products[]) => {

  //       products.forEach((prod, i) => {
  //         if (prod.id === product.id) {
  //             found = true
  //             index =i
  //         }
  //        })
  //         if (found) {
  //           if (toDo === "add") {
  //             product.qty++
  //           }else if (toDo === "minus"){
  //                 if (products[index].qty>1) {
  //                   product.qty--
  //                 }
  //           }
  //           products[index]=product;
  //         }else{

  //           product.qty = 1
  //           products.push(product)

  //         }
  //         console.log(products);


  //       this.itemsSubject.next(products);
  //       localStorage.setItem('products', JSON.stringify(products));
  //     }),
  //   ).subscribe();
  // }

   removeCartItem(product: Products){
    this.items$.pipe(
      take(1),
      map((products:Products[]) => {
        products.splice(products.indexOf(product), 1);
        this.itemsSubject.next(products);
        localStorage.setItem('products', JSON.stringify(products));
      }),
    ).subscribe();
}

panier(){
  return this.itemsSubject.asObservable();
}


addToCart(product: Products, toDo:string, composant:TailleBoisson[]=[]):void {
  let index = 0
  let found = false;
  this.items$.pipe(
    take(1),
    map((products:Products[]) => {

      products.forEach((prod, i) => {
        if (prod.id === product.id) {
            found = true
            index =i
        }
       })
        if (found) {
          if (toDo === "add") {
            product.qty++
          }else if (toDo === "minus"){
                if (products[index].qty>1) {
                  product.qty--
                }
          }
          products[index]=product;
        }else{

          product.qty = 1
        console.log(composant);

          if(composant.length >0){

           product.composant = composant
          }
          products.push(product)

        }

        console.log(products);


      this.itemsSubject.next(products);
      localStorage.setItem('products', JSON.stringify(products));
    }),
  ).subscribe();
}

removeCart(){
  this.items$.pipe(
    take(1),
    map((products:Products[]) => {
      products = []
      this.itemsSubject.next(products);
      localStorage.removeItem('products');
    }),
  ).subscribe();
}


}
