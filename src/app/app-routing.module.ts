import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/container/cart/cart.component';
import { ProductDetailComponent } from './components/container/catalogue/product-detail/product-detail.component';
import { CommandeDetailComponent } from './components/container/commandes/commande-detail/commande-detail.component';
import { CommandeComponent } from './components/container/commandes/commande/commande.component';
import { ContainerComponent } from './components/container/container.component';

const routes: Routes = [

 { path: '', component:ContainerComponent },
 { path: 'cart', component:CartComponent },
 { path: 'catalogue/:id', component:ProductDetailComponent},
 { path: 'user/commandes/:id', component:CommandeComponent},
 { path: 'commandes/:id', component:CommandeDetailComponent},
 { path: 'admin', loadChildren: () => import('./components/admin/admin.module').then(m => m.AdminModule) },
 {path: '**', redirectTo:'/'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation:'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
