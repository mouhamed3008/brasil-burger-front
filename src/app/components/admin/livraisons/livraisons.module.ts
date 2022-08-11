import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { LivraisonlistComponent } from './livraisonlist/livraisonlist.component';
import { LivraisonDetailComponent } from './livraison-detail/livraison-detail.component';
import { LivraisonLivreurComponent } from './livraison-livreur/livraison-livreur.component';
import { LivraisonItemComponent } from './livraisonlist/livraison-item/livraison-item.component';
import { FormsModule } from '@angular/forms';



const routes: Routes = [
   { path: '', component: LivraisonlistComponent },
   { path: 'livreur/:id', component: LivraisonLivreurComponent },
   { path: ':id', component: LivraisonDetailComponent },
];


@NgModule({
  declarations: [

    LivraisonlistComponent,
       LivraisonDetailComponent,
       LivraisonLivreurComponent,
       LivraisonItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class LivraisonsModule { }
