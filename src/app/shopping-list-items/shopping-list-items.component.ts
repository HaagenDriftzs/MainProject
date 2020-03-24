import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Property} from '../shared/property.model';
import {Subscription} from 'rxjs';
import {ShoppingListService} from './shopping-list-items.service';
import {Product} from '../products/product.model';
import {ProductService} from '../products/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Checkout} from '../shared/checkout.model';
import {Admin} from '../admin/admin.model';

@Component({
  selector: 'app-shopping-list-items',
  templateUrl: './shopping-list-items.component.html',
  styleUrls: ['./shopping-list-items.component.css']
})
export class ShoppingListItemsComponent implements OnInit, OnDestroy {
  /*properties: Property[];
  private subscription: Subscription;

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.properties = this.slService.getProperties();
    this.subscription = this.slService.propertiesChanged
      .subscribe(
        (properties: Property[]) => {
          this.properties = properties;
        }
      );
  }

  onEditItem(index: number) {
    this.slService.startedEditing.next(index);
  }*/

  admin: any;
  @Input('admin') adminObj: Admin;

  products: Product[];
  checkout: Checkout[];
  subscription: Subscription;


  constructor(private productService: ProductService, private slService: ShoppingListService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.subscription = this.productService.productsChanged
      .subscribe(
        (products: Product[]) => {
          this.products = products;
        }
      );
    this.products = this.productService.getProducts();
  }

  onCashPayment() {
    this.products.splice(0, Product.length);
    this.adminObj.cashPayment = this.adminObj.cashPayment + 1;
    this.adminObj.transactions = this.adminObj.transactions + 1;
    console.log(this.adminObj.cashPayment);
    console.log(this.adminObj.transactions);
  }
  onCardPayment() {
    this.products.splice(0, Product.length);
    this.adminObj.cardPayment = this.adminObj.cardPayment + 1;
    this.adminObj.transactions = this.adminObj.transactions + 1;
  }
  /* ngOnInit() {
     this.products = this.slService.getCheckouts();
     this.subscription = this.slService.productsChanged
       .subscribe(
         (products: Product[]) => {
           this.products = products;
         }
       );
   }

   onEditItem(index: number) {
     this.slService.startedEditing.next(index);
   }*/

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
