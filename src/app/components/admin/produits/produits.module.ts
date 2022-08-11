import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductNewComponent } from './product-new/product-new.component';



const routes: Routes = [
  { path: '', component: ProductsListComponent },
  { path: 'new', component: ProductNewComponent }
];


@NgModule({
  declarations: [

    ProductsListComponent,
       ProductNewComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ProduitsModule { }
