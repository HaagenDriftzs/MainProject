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
import { AdminComponent } from './admin/admin.component';
import { ProductFunctionalityComponent } from './admin/productFunctionality/productFunctionality.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './appRouting.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ProductStartComponent} from './products/productStart/productStart.component';
import {ProductEditComponent} from './products/product-edit/product-edit.component';
import {ShoppingListService} from './shopping-list-items/shopping-list.service';
import {ProductService} from './products/product.service';
import {AdminEditComponent} from './admin/admin-edit/admin-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthenticationSectionComponent,
    AdminEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
