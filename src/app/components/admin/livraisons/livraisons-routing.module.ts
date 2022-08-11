import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LivraisonsComponent } from './livraisons.component';

const routes: Routes = [{ path: '', component: LivraisonsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LivraisonsRoutingModule { }
