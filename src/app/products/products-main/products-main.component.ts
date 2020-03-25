import { Component, OnInit } from '@angular/core';
import {Product} from '../product.model';
import {Checkout} from '../../shared/checkout.model';
import {Subscription} from 'rxjs';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-products-main',
  templateUrl: './products-main.component.html',
  styleUrls: ['./products-main.component.css']
})
export class ProductsMainComponent implements OnInit {


  products: Product[];
  subscription: Subscription;

  subText = ''; // The text that should appear in the sub-display
  mainText = ''; // The text that should appear in the main display
  operand1: number; // The first operand
  operator = ''; // The operator
  operatorSet = false; // You'll see how this is used soon

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.subscription = this.productService.productsChanged
      .subscribe(
        (products: Product[]) => {
          this.products = products;
        }
      );
    this.products = this.productService.getProducts();
  }
  // Line 10 - Line 17


  // Line 19 - Line 36
  pressKey(key: string) {
    if (key === '/' || key === 'x' || key === '-' || key === '+') {
      const lastKey = this.mainText[this.mainText.length - 1];
      if (lastKey === '/' || lastKey === 'x' || lastKey === '-' || lastKey === '+') {
        this.operatorSet = true;
      }
      if ((this.operatorSet) || (this.mainText === '')) {
        return;
      }
      this.operand1 = parseFloat(this.mainText);
      this.operator = key;
      this.operatorSet = true;
    }
    if (this.mainText.length === 10) {
      return;
    }
    this.mainText += key;
  }
}
