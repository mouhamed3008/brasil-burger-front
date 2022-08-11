import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { CommandesModule } from './commandes/commandes.module';
import { LivraisonsModule } from './livraisons/livraisons.module';
import { ProduitsModule } from './produits/produits.module';

const routes: Routes = [
  {
    path: '', component:AdminComponent,
    children: [
      {
        path:'commandes',
        loadChildren: () => import('./commandes/commandes.module').then(m => m.CommandesModule)
      },

      {
        path:'livraisons',
        loadChildren: () => import('./livraisons/livraisons.module').then(m => m.LivraisonsModule)
      },

      {
        path:'produits',
        loadChildren: () => import('./produits/produits.module').then(m => m.ProduitsModule)
      },

      {
        path:'',
        loadChildren: () => import('./commandes/commandes.module').then(m => m.CommandesModule)
      },



    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }
