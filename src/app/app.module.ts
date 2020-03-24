import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  AccumulationChartModule,
  CategoryService,
  ChartModule,
  ColumnSeriesService,
  LegendService,
  LineSeriesService,
  DataLabelService, TooltipService, PieSeriesService, AccumulationDataLabelService, AccumulationLegendService
} from '@syncfusion/ej2-angular-charts';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductItemComponent } from './products/product-list/product-item/product-item.component';
import { ShoppingListItemsComponent } from './shopping-list-items/shopping-list-items.component';
import { ShoppingEditComponent } from './shopping-list-items/shopping-edit/shopping-edit.component';
import { AuthenticationSectionComponent } from './authenticationSection/authenticationSection.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HeaderComponent} from './header/header.component';
import {ProductEditComponent} from './products/product-edit/product-edit.component';
import {HttpClientModule} from '@angular/common/http';
import {DropdownDirective} from './shared/dropdown.directive';
import {ShoppingListService} from './shopping-list-items/shopping-list-items.service';
import {ProductService} from './products/product.service';
import {ProductStartComponent} from './products/productStart/productStart.component';
import {AppRoutingModule} from './appRouting.module';
import {AdminComponent} from './admin/admin.component';
import { AdminEditComponent } from './admin/admin-edit/admin-edit.component';
import { GraphSectionComponent } from './admin/graph-section/graph-section.component';
import { StatisticComponent } from './admin/graph-section/statistic/statistic.component';
import { PieGraphComponent } from './admin/graph-section/pie-graph/pie-graph.component';
import { BarGraphComponent } from './admin/graph-section/bar-graph/bar-graph.component';
import { AdminSignupComponent } from './admin/admin-signup/admin-signup.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductDetailComponent,
    ProductListComponent,
    ProductItemComponent,
    ShoppingListItemsComponent,
    ShoppingEditComponent,
    AuthenticationSectionComponent,
    HeaderComponent,
    ProductEditComponent,
    DropdownDirective,
    ProductStartComponent,
    AdminComponent,
    AdminEditComponent,
    GraphSectionComponent,
    StatisticComponent,
    PieGraphComponent,
    BarGraphComponent,
    AdminSignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    ChartModule,
    AccumulationChartModule
  ],
  providers: [
    ShoppingListService,
    ProductService,
    LineSeriesService,
    CategoryService,
    LegendService,
    ColumnSeriesService,
    DataLabelService,
    TooltipService,
    PieSeriesService,
    AccumulationDataLabelService,
    AccumulationLegendService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
