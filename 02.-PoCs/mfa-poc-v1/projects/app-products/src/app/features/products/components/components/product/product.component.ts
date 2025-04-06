import { Component, input, OnInit } from '@angular/core';
import { IProduct } from '../../../models/i-product';
import { AsyncPipe, CurrencyPipe, JsonPipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-product-component',
  imports: [
    JsonPipe,
    AsyncPipe,
    CurrencyPipe,
    MatIconModule
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {

  readonly product = input<IProduct>();
  data = input();
  stars = [1, 2, 3, 4, 5];
  ngOnInit(): void {
    console.log('ProductComponent...');
    console.log(this.product());
  }

}
