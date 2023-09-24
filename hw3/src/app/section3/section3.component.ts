import { Component } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-section3',
  templateUrl: './section3.component.html',
  styleUrls: ['./section3.component.scss'],
})
export class Section3Component {
  // clickCount = 0;

  // incrementClickCount() {
  //   this.clickCount++;
  // }

  section3Products: Product[] = [];
  newProduct: Product = { name: '', price: 0, description: '', quantity: 0 };

  addProduct() {
    this.section3Products.push({ ...this.newProduct });
    this.newProduct = { name: '', price: 0, description: '', quantity: 0 };
  }
}
