import { Observable } from 'rxjs';
import { ProductService } from './../../_service/product.service';
import { CartService } from './../../_service/cart.service';
import { CartItem } from './../../_model/cart-item';
import { Product } from './../../_model/product.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shopping-widgets',
  templateUrl: './shopping-widgets.component.html',
  styleUrls: ['./shopping-widgets.component.scss']
})
export class ShoppingWidgetsComponent implements OnInit {
  products: Product[];
  indexProduct: number;

  public sidenavMenuItems:Array<any>;

  @Input() shoppingCartItems: CartItem[] = [];

  constructor(private cartService: CartService, public productService: ProductService) { }

  ngOnInit(): void {
  }

  public updateCurrency(curr) {
    this.productService.currency = curr;
  }


  public removeItem(item: CartItem) {
    this.cartService.removeFromCart(item);
  }

  public getTotal(): Observable<number> {
    return this.cartService.getTotalAmount();
  }

}
