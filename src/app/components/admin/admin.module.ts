import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { AdminComponent } from './admin.component';


@NgModule({
  declarations: [
    AdminComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],

})
export class AdminModule { }
