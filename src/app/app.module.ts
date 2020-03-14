import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';
import {AuthenticationSectionComponent} from './authenticationSection/authenticationSection.component';
import { ShoppingListItemsComponent } from './shopping-list-items/shopping-list-items.component';
import { ProductsComponent } from './products/products.component';
import { ProductListComponent } from './products/product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthenticationSectionComponent,
    ShoppingListItemsComponent,
    ProductsComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
