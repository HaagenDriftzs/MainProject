import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductsComponent} from './products/products.component';
import {ShoppingListItemsComponent} from './shopping-list-items/shopping-list-items.component';
import {AuthenticationSectionComponent} from './authenticationSection/authenticationSection.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/products', pathMatch: 'full'},
  {path: 'products', component: ProductsComponent},
  {path: 'shopping-list-items', component: ShoppingListItemsComponent},
  {path: 'authenticationSection', component: AuthenticationSectionComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
