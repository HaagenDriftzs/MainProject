import {Component, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs';
import {Property} from '../../shared/property.model';
import {ShoppingListService} from '../shopping-list-items.service';
import {Product} from '../../products/product.model';
import {Checkout} from '../../shared/checkout.model';
import {ProductService} from '../../products/product.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  /*@Input() product: Product;
  @Input() index: number;
  @ViewChild('f', { static: false }) slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Property;

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.slService.startedEditing
      .subscribe(
        (index: number) => {
          this.editedItemIndex = index;
          this.editMode = true;
          this.editedItem = this.slService.getProperty(index);
          this.slForm.setValue({
            name: this.editedItem.name,
            amount: this.editedItem.amount
          });
        }
      );
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newProperty = new Property(value.name, value.amount);
    if (this.editMode) {
      this.slService.updateProperty(this.editedItemIndex, newProperty);
    } else {
      this.slService.addProperty(newProperty);
    }
    this.editMode = false;
    form.reset();
  }

  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.slService.deleteProperty(this.editedItemIndex);
    this.onClear();
  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }*/
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
