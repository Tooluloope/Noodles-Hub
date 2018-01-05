import { Injectable } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {Product} from '../model/product';
import {ShoppingCart} from '../model/shopping-cart';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/publishReplay';

@Injectable()
export class ShoppingCartService {
  public carts$: Observable<ShoppingCart>;
  constructor(private db: AngularFireDatabase) {
  }

  async addToCart(product: Product) {
    this.updateItem(product, 1);
  }


  async removeFromCart(product: Product) {
    this.updateItem(product, -1);
  }

  async getCart(): Promise<Observable<ShoppingCart>> {
    if (!this.carts$) {
      const cartId = await this.getOrCreateCartId();
      this.carts$ =  this.db.object('/shopping-carts/' + cartId)
        .map(x => new ShoppingCart(x.items)).publishReplay(1).refCount();
    }
    return this.carts$;
  }

  async clearCart() {
    const cartId = await this.getOrCreateCartId();
    this.db.object('/shopping-carts/' + cartId + '/items').remove();
  }

  private create() {
    return this.db.list('/shopping-carts').push({
      dateCreated: new Date().getTime()
    });
  }

  private async getOrCreateCartId(): Promise<string> {
    const cartId = localStorage.getItem('cartId');
    if (cartId) {
      return cartId;
    }
    const result = await this.create();
    localStorage.setItem('cartId', result.key);
    // Add product to cart
    return result.key;
  }


  private getItem(cartId: string, productId: string) {
    return this.db.object('/shopping-carts/' + cartId + '/items/' + productId);

  }


  private async updateItem(product: Product, change: number) {
    const cartId = await this.getOrCreateCartId();
    const item$ = this.getItem(cartId, product.$key);
    item$.take(1).subscribe(item => {
      const quantity = (item.quantity || 0) + change;
      if (quantity === 0) {
        item$.remove();
      } else {
        item$.update({
          title: product.title,
          imageUrl: product.imageUrl,
          price: product.price,
          quantity: quantity
        });
      }
    });
  }
}
