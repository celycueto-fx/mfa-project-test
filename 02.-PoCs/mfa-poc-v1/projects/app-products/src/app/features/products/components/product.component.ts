import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MFRouterLinkDirective } from '../../../shared/directives/MFRouterLinkDirective';
import { ProductListComponent } from "./product-list/product-list.component";


@Component({
  selector: 'app-product',
  imports: [
    RouterOutlet,
    RouterLink,
    MFRouterLinkDirective,
    ProductListComponent,

],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

}
