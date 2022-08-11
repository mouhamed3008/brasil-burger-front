import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContainerComponent } from './components/container/container.component';
import { CatalogueComponent } from './components/container/catalogue/catalogue.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { CartComponent } from './components/container/cart/cart.component';
import { FormsModule } from '@angular/forms';
import { CatalogueItemComponent } from './components/container/catalogue/catalogue-item/catalogue-item.component';
import { ProductDetailComponent } from './components/container/catalogue/product-detail/product-detail.component';
import { CommandeComponent } from './components/container/commandes/commande/commande.component';
import { CommandeDetailComponent } from './components/container/commandes/commande-detail/commande-detail.component';
import { ComplementComponent } from './components/container/complement/complement.component';
import { FilterSearchPipe } from './shared/filter-search.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContainerComponent,
    CatalogueComponent,
    CatalogueItemComponent,
    ProductDetailComponent,
    CartComponent,
    CommandeComponent,
    CommandeDetailComponent,
    ComplementComponent,
    FilterSearchPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule

    // Ng2SearchPipeModule


  ],
  providers: [
    DatePipe,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
