import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {ProductProperty} from '../../shared/productProperty.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', {static: false}) nameInputRef: ElementRef;
  @ViewChild('amountInput', {static: false}) amountInputRef: ElementRef;
  @Output() propertyAdded = new EventEmitter<ProductProperty>();
  constructor() { }

  ngOnInit() {
  }
  onAddItem() {
    const propertyName = this.nameInputRef.nativeElement.value;
    const propertyAmount = this.amountInputRef.nativeElement.value;
    const newProperty = new ProductProperty(propertyName, propertyAmount);
    this.propertyAdded.emit(newProperty);
  }
}
