import { Injectable } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {ShoppingCartService} from './shopping-cart.service';

@Injectable()
export class OrderService {
  public orderByUser$;
  public orders$;

  public OrdersByOrderId$;
  constructor(private db: AngularFireDatabase,
              private cartService: ShoppingCartService) { }

  async placeOrder(order) {
    const result = await this.db.list('/orders').push(order);
    this.cartService.clearCart();
    return result;
  }
  getOrders() {
    if (!this.orders$) {
      this.orders$ = this.db.list('/orders').publishReplay(1).refCount();
    }
    return this.orders$;
  }

  getOrdersByUser(userId: string) {
    if (!this.orderByUser$) {
      this.orderByUser$ = this.db.list('/orders', {
        query: {
          orderByChild: 'userId',
          equalTo: userId
        }
      }).publishReplay(1).refCount();
    }
    return this.orderByUser$;
  }
  getOrdersByOrderId(orderId) {
    if (!this.OrdersByOrderId$) {
      this.OrdersByOrderId$ = this.db.list('/orders/' + orderId + '/items');
      }
      return this.OrdersByOrderId$;
    }
}
