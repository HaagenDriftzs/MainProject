import { Component, OnInit } from '@angular/core';
import {Product} from '../product.model';
import  {Checkout} from '../../shared/checkout.model';
import {ProductService} from '../product.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product;
  checkout: Checkout;
  id: number;

  constructor(private productService: ProductService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.product = this.productService.getProduct(this.id);
        }
      );
  }

  /*onAddToShoppingList() {
   this.productService.addProductToShoppingList(this.checkout.products);
  }*/

  onEditProduct() {
    this.router.navigate(['edit'], {relativeTo: this.route});
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }

  onDeleteProduct() {
    this.productService.deleteProduct(this.id);
    this.router.navigate(['/products']);
  }
}
