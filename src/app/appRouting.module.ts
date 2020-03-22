import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductsComponent} from './products/products.component';
import {ShoppingListItemsComponent} from './shopping-list-items/shopping-list-items.component';
import {AuthenticationSectionComponent} from './authenticationSection/authenticationSection.component';
import {AuthenticationSectionGuard} from './authenticationSection/authenticationSection.guard';
import {AdminComponent} from './admin/admin.component';
import {AdminProductComponent} from './admin/admin-product/admin-product.component';
import {ShoppingEditComponent} from './shopping-list-items/shopping-edit/shopping-edit.component';
import {ProductListComponent} from './products/product-list/product-list.component';
import {ProductItemComponent} from './products/product-list/product-item/product-item.component';
import {ProductDetailComponent} from './products/product-detail/product-detail.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/products', pathMatch: 'full'},
  {path: 'products', component: ProductsComponent, canActivate: [AuthenticationSectionGuard]},
  {path: 'product-list', component: ProductListComponent, canActivate: [AuthenticationSectionGuard]},
  {path: 'product-item', component: ProductItemComponent, canActivate: [AuthenticationSectionGuard]},
  {path: 'product-detail', component: ProductDetailComponent, canActivate: [AuthenticationSectionGuard]},
  {path: 'shopping-list-items', component: ShoppingListItemsComponent, canActivate: [AuthenticationSectionGuard]},
  {path: 'shopping-edit', component: ShoppingEditComponent, canActivate: [AuthenticationSectionGuard]},
  {path: 'admin', component: AdminComponent, canActivate: [AuthenticationSectionGuard]},
  {path: 'admin-product', component: AdminProductComponent, canActivate: [AuthenticationSectionGuard]},
  {path: 'authenticationSection', component: AuthenticationSectionComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
