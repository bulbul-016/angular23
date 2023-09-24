import { Component } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-section4',
  templateUrl: './section4.component.html',
  styleUrls: ['./section4.component.scss'],
})
export class Section4Component {
  // clickCount = 0;

  // incrementClickCount() {
  //   this.clickCount++;
  // }

  section4Products: Product[] = [];
  newProduct: Product = { name: '', price: 0, description: '', quantity: 0 };

  addProduct() {
    this.section4Products.push({ ...this.newProduct });
    this.newProduct = { name: '', price: 0, description: '', quantity: 0 };
  }
}
