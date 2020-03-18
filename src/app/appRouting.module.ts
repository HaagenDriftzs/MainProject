import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductsComponent} from './products/products.component';
import {ShoppingListItemsComponent} from './shopping-list-items/shopping-list-items.component';
import {AuthenticationSectionComponent} from './authenticationSection/authenticationSection.component';
import {AuthenticationSectionGuard} from './authenticationSection/authenticationSection.guard';
import {AdminComponent} from './admin/admin.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/products', pathMatch: 'full'},
  {path: 'products', component: ProductsComponent, canActivate: [AuthenticationSectionGuard]},
  {path: 'shopping-list-items', component: ShoppingListItemsComponent, canActivate: [AuthenticationSectionGuard]},
  {path: 'admin', component: AdminComponent, canActivate: [AuthenticationSectionGuard]},
  {path: 'authenticationSection', component: AuthenticationSectionComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
