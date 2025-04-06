import { AsyncPipe, CurrencyPipe } from '@angular/common';
import { Component, inject, input, OnInit, SimpleChanges } from '@angular/core';
import { IProduct } from '../../../models/i-product';
import { MFNavigateService } from '../../../../../shared/services/MFNavigateService';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-products-slider',
  imports: [AsyncPipe,CurrencyPipe],
  templateUrl: './products-slider.component.html',
  styleUrl: './products-slider.component.css'
})
export class ProductsSliderComponent implements OnInit{

  readonly products = input<IProduct[]>();
  listProducts: IProduct[] | undefined;
  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['products'] && changes['products'].currentValue) {
      this.listProducts=this.products()?.slice(0,3)

    }
  }
  addToCart(product: any) {

  }

  goToProduct(product: any) {

  }
}
