import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {ShoppingCartService} from '../../services/shopping-cart.service';
import {ShoppingCart} from '../../model/shopping-cart';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
    @Input('product') product: Product;
    @Input('showActions') showActions = true;
    @Input('shopping-carts') shoppingCart: ShoppingCart;
  constructor(private cartService: ShoppingCartService) { }

  ngOnInit() {
    }
  addToCart() {
    this.cartService.addToCart(this.product);
  }
}
