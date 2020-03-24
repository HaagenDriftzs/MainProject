import {Product} from '../products/product.model';

export class Checkout {
  public productSale: number;
  public cardSale: number;
  public cashSale: number;
  public quantitySold: number;

  constructor(productSale: number, cardSale: number, cashSale: number, quantitySold: number) {
    this.productSale = productSale;
    this.cardSale = cardSale;
    this.cashSale = cashSale;
    this.quantitySold = quantitySold;
  }
}
