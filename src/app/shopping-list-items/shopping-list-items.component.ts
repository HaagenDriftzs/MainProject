import { Component, OnInit } from '@angular/core';
import {ProductProperty} from '../shared/productProperty.model';

@Component({
  selector: 'app-shopping-list-items',
  templateUrl: './shopping-list-items.component.html',
  styleUrls: ['./shopping-list-items.component.css']
})
export class ShoppingListItemsComponent implements OnInit {
  productProperties: ProductProperty[] = [
    new ProductProperty('Sugar', 5)
  ];

  constructor() { }

  ngOnInit() {
  }

  onProductAdded(property: ProductProperty) {
    this.productProperties.push(property);
  }
}
