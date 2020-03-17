/*
* This is is product service where it allow the other components to access multiple methods.
* This has important methods that will be called from other components including, edit, delete... etc.
* */


import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {Product} from './product.model';

@Injectable()

export class ProductService {
  productsChanged = new Subject<Product[]>();

  private products: Product[] = [];

  getProducts() {
    return this.products.slice();
  }
}
