
import { ProductService } from './../../services/product.service';
import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IProduct } from '../../models/i-product';
import { AsyncPipe, CurrencyPipe, JsonPipe } from '@angular/common';
import { MFRouterLinkDirective } from './../../../../shared/directives/MFRouterLinkDirective';
import { MFNavigateService } from '../../../../shared/services/MFNavigateService';
import { GLOBAL_MFA_PRODUCTS_EVENTS } from '../../../../constants/events.constants';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ProductsSliderComponent } from './products-slider/products-slider.component';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-product-list',
  imports: [
    AsyncPipe,
    JsonPipe,
    CurrencyPipe,
    MFRouterLinkDirective,
    MatCardModule,
    MatButtonModule,
    ProductsSliderComponent,
    AsyncPipe,
    CurrencyPipe,
    MatIconModule

],
   schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent  implements OnInit{

  products$?:Observable<IProduct[]>
  stars = [1, 2, 3, 4, 5];
  productService=inject(ProductService);
  mfNavigateService=inject(MFNavigateService);
  listProduct:any=[];

  ngOnInit(): void {
    //throw new Error('Method not implemented.');
    this.findAll();
  }

  findAll(){
    console.log('findAll ... ')

    this.products$ = this.productService.findAll().pipe(
      map(products => products.slice(6, 12)) // Tomar solo los primeros 6 elementos
    );
    if(this.products$){
      this.productService.findAll().subscribe(products => {
        this.listProduct=products;

      });
    }
  }

  reservar(product:IProduct){
     window.dispatchEvent(
              //new CustomEvent('mfProductReserved', {
                new CustomEvent(GLOBAL_MFA_PRODUCTS_EVENTS.PRODUCT_RESERVED_EVENT, {
                detail: {
                  product:product,
                  quantity:1
                },
              })
            );

  }

  details(product:IProduct){
    this.mfNavigateService.navigate('products/details/'+product.id, { queryParams: null});
  }

}
