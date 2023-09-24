import { Component } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-section1',
  templateUrl: './section1.component.html',
  styleUrls: ['./section1.component.scss'],
})
export class Section1Component {
  // clickCount = 0;

  // incrementClickCount() {
  //   this.clickCount++;
  // }
  section1Products: Product[] = [];
  newProduct: Product = { name: '', price: 0, description: '', quantity: 0 };

  addProduct() {
    this.section1Products.push({ ...this.newProduct });
    this.newProduct = { name: '', price: 0, description: '', quantity: 0 };
  }
}
