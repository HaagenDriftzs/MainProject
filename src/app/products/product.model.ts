import { Property } from '../shared/property.model';

export class Product {
  public productId: string;
  public name: string;
  public price: string;
  public imagePath: string;
  public properties: Property[];
  /*public checkout: Product[];*/

  constructor(productId: string, name: string, price: string, imagePath: string, properties: Property[]/*, checkout: Product[]*/) {
    this.productId = productId;
    this.name = name;
    this.price = price;
    this.imagePath = imagePath;
    this.properties = properties;
    /*this.checkout = checkout;*/
  }
}
