import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProductService} from '../products/product.service';
import {Product} from '../products/product.model';
import {map} from 'rxjs/operators';

@Injectable({ providedIn: 'root'})

export class DataStorageService {

  constructor(private http: HttpClient, private productService: ProductService) {
  }

  storeProducts() {
    const products = this.productService.getProducts();
    this.http.put('https://fyp-database-493f6.firebaseio.com/products.json',
     products
    )
      .subscribe(response => {
        console.log(response);
      });
  }

  fetchProducts() {
    return this.http.get<Product[]>(
      'https://fyp-database-493f6.firebaseio.com/products.json'
    )
      .pipe(
        map(products => {
          return products.map(product => {
            return {
              ...product,
              productProperties: product.productProperties ? product.productProperties : []
            };
          });
        })
      );
  }
}
