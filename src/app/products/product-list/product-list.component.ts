import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Product} from '../product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Output() productWasSelected = new EventEmitter<Product>();
  products: Product[] = [
    new Product('0001', 'Coke', '1.50', 'https://www.thesun.co.uk/wp-content/uploads/2017/09/nintchdbpict000333930574.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

  onProductSelected(product: Product) {
  this.productWasSelected.emit(product);
  }
}
