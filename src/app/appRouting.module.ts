import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductsComponent} from './products/products.component';
import {ShoppingListItemsComponent} from './shopping-list-items/shopping-list-items.component';
import {AuthenticationSectionComponent} from './authenticationSection/authenticationSection.component';
import {AuthenticationSectionGuard} from './authenticationSection/authenticationSection.guard';
import {AdminComponent} from './admin/admin.component';
import {ProductEditComponent} from './products/product-edit/product-edit.component';
import {ProductStartComponent} from './products/productStart/productStart.component';
import {ProductDetailComponent} from './products/product-detail/product-detail.component';
import {ProductResolverService} from './products/product-resolver.service';
import {GraphSectionComponent} from './admin/graph-section/graph-section.component';
import {StatisticComponent} from './admin/graph-section/statistic/statistic.component';
import {BarGraphComponent} from './admin/graph-section/bar-graph/bar-graph.component';
import {PieGraphComponent} from './admin/graph-section/pie-graph/pie-graph.component';
import {AdminSignupComponent} from './admin/admin-signup/admin-signup.component';
import {ProductsMainComponent} from './products/products-main/products-main.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/products', pathMatch: 'full'},
  {
    path: 'products',
    component: ProductsComponent,
    canActivate: [AuthenticationSectionGuard],
    children: [
      { path: '', component: ProductStartComponent },
      { path: 'new', component: ProductEditComponent },
      {
        path: ':id',
        component: ProductDetailComponent,
        resolve: [ProductResolverService]
      },
      {
        path: ':id/edit',
        component: ProductEditComponent,
        resolve: [ProductResolverService]
      }
    ]
  },
  { path: 'shopping-list-items', component: ShoppingListItemsComponent, canActivate: [AuthenticationSectionGuard] },
  { path: 'authenticationSection', component: AuthenticationSectionComponent },
  { path: 'adminSection', component: AdminComponent, canActivate: [AuthenticationSectionGuard]},
  { path: 'graph-section', component: GraphSectionComponent, canActivate: [AuthenticationSectionGuard] },
  { path: 'statistic', component: StatisticComponent, canActivate: [AuthenticationSectionGuard]},
  { path: 'bar-graph', component: BarGraphComponent, canActivate: [AuthenticationSectionGuard]},
  { path: 'pie-graph', component: PieGraphComponent, canActivate: [AuthenticationSectionGuard]},
  { path: 'admin-signup', component: AdminSignupComponent, canActivate: [AuthenticationSectionGuard]},
  { path: 'products-main', component: ProductsMainComponent, canActivate: [AuthenticationSectionGuard]},
  {
    path: 'admin-edit',
    component: ProductsComponent,
    canActivate: [AuthenticationSectionGuard],
    children: [
      { path: '', component: ProductStartComponent },
      { path: 'new', component: ProductEditComponent },
      {
        path: ':id',
        component: ProductDetailComponent,
        resolve: [ProductResolverService]
      },
      {
        path: ':id/edit',
        component: ProductEditComponent,
        resolve: [ProductResolverService]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
