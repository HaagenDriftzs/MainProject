import { Property } from '../shared/property.model';
import { Subject } from 'rxjs';
import {Product} from '../products/product.model';

export class ShoppingListService {
  propertiesChanged = new Subject<Property[]>();
  productsChanged = new Subject<Product[]>();
  startedEditing = new Subject<number>();
  private properties: Property[] = [
    new Property('Apples', 5),
    new Property('Tomatoes', 10),
  ];

  private products: Product[] = [];

  getCheckouts() {
    return this.products.slice();
  }

  getCheckout(index: number) {
    return this.products[index];
  }


  addCheckout(product: Product) {
    this.products.push(product);
    this.productsChanged.next(this.products.slice());
  }

  addCheckouts(products: Product[]) {
    // for (let ingredient of ingredients) {
    //   this.addIngredient(ingredient);
    // }
    this.products.push(...products);
    this.productsChanged.next(this.products.slice());
  }

  updateCheckout(index: number, newProduct: Product) {
    this.products[index] = newProduct;
    this.productsChanged.next(this.products.slice());
  }

  deleteCheckout(index: number) {
    this.products.splice(index, 1);
    this.productsChanged.next(this.products.slice());
  }



  getProperties() {
    return this.properties.slice();
  }

  getProperty(index: number) {
    return this.properties[index];
  }

  addProperty(property: Property) {
    this.properties.push(property);
    this.propertiesChanged.next(this.properties.slice());
  }

  addProperties(properties: Property[]) {
    // for (let ingredient of ingredients) {
    //   this.addIngredient(ingredient);
    // }
    this.properties.push(...properties);
    this.propertiesChanged.next(this.properties.slice());
  }

  updateProperty(index: number, newProperty: Property) {
    this.properties[index] = newProperty;
    this.propertiesChanged.next(this.properties.slice());
  }

  deleteProperty(index: number) {
    this.properties.splice(index, 1);
    this.propertiesChanged.next(this.properties.slice());
  }
}
