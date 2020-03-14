import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';
import {AuthenticationSectionComponent} from './authenticationSection/authenticationSection.component';
import { ShoppingListItemsComponent } from './shopping-list-items/shopping-list-items.component';
import { ProductsComponent } from './products/products.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductItemComponent } from './products/product-list/product-item/product-item.component';
import { ShoppingEditComponent } from './shopping-list-items/shopping-edit/shopping-edit.component';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './appRouting.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthenticationSectionComponent,
    ShoppingListItemsComponent,
    ProductsComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductItemComponent,
    ShoppingEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
