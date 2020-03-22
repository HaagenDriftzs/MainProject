import {Component} from '@angular/core';
import {Product} from '../../products/product.model';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.css']
})

export class AdminProductComponent {
  selectedProduct: Product;
}
