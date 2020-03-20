/*
*  This is the data storage model for the product which contains the main variables for the product
* */

import {ProductProperty} from '../shared/productProperty.model';

export class Product {
  public productId: string;
  public name: string;
  public price: string;
  public imagePath: string;
  /*public productProperties: ProductProperty[];*/

  constructor(productId: string, name: string, price: string, imagePath: string/*productProperties: ProductProperty[]*/ ) {
    this.productId = productId;
    this.name = name;
    this.price = price;
    this.imagePath = imagePath;
    /*this.productProperties = productProperties;*/
  }

}
