import { Component } from '@angular/core';
import { Product } from '../models/product.model';
@Component({
  selector: 'app-section2',
  templateUrl: './section2.component.html',
  styleUrls: ['./section2.component.scss'],
})
export class Section2Component {
  // clickCount = 0;

  // incrementClickCount() {
  //   this.clickCount++;
  // }
  section2Products: Product[] = [];
  newProduct: Product = { name: '', price: 0, description: '', quantity: 0 };

  addProduct() {
    this.section2Products.push({ ...this.newProduct });
    this.newProduct = { name: '', price: 0, description: '', quantity: 0 };
  }
}
