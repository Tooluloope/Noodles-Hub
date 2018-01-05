import { Injectable } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {Product} from './shared/model/product';

@Injectable()
export class ShoppingCartService {

  constructor(private db: AngularFireDatabase) { }
  create() {
    return this.db.list('/shopping-carts').push({
      dateCreated: new Date().getTime()
    });
  }

   async getCart() {
  const cartId = await this.getOrCreateCartId();
    return this.db.object('/shopping-carts/' + cartId);
  }
  private async getOrCreateCartId(): Promise<string> {
    const cartId = localStorage.getItem('cartId');
    if (cartId) { return cartId; }
      const result = await this.create();
      localStorage.setItem('cartId', result.key);
       // Add product to cart
       return result.key;
    }

  async addToCart(product: Product) {
    const cartId = await this.getOrCreateCartId();
    const item$ = this.getItem(cartId, product.$key);
    item$.take(1).subscribe(item => {
        item$.update({product: product, quantity: (item.quantity || 0) + 1});
    });
  }
  private getItem(cartId: string, productId: string) {
    return this.db.object('/shopping-carts/' + cartId + '/items/' + productId);

  }
}
