import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { ListeCmdComponent } from './liste-cmd/liste-cmd.component';
import { ZonecmdComponent } from './zonecmd/zonecmd.component';
import { DetailcmdComponent } from './detailcmd/detailcmd.component';
import { FormsModule } from '@angular/forms';




const routes: Routes = [
  { path: '', component:  ListeCmdComponent},
  { path: 'zone/:id', component:  ZonecmdComponent},
  { path: ':id', component:  DetailcmdComponent},
];


@NgModule({
  declarations: [
    ListeCmdComponent,
    ZonecmdComponent,
    DetailcmdComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule

  ]
})
export class CommandesModule { }
