import {ShoppingCartItem} from './shopping-cart-item';
import {Product} from './product';

export class ShoppingCart {
  items: ShoppingCartItem[] = [];
  deliveryFee: number = 150;

  constructor(private itemsMap: {[productId: string]: ShoppingCartItem}) {
    this.itemsMap = itemsMap || {};
    for ( const productId in itemsMap) {
      if (itemsMap.hasOwnProperty(productId)) {
        const item = itemsMap[productId];
        this.items.push(new ShoppingCartItem({...item, $key: productId
        }));
      }
    }

  }
  getQuantity( product: Product) {
    const item = this.itemsMap[product.$key];
    return item ? item.quantity : 0;
  }

    get totalPrice() {
    let sum = 0;
    let deliveryFee = 0
    for ( const productId in this.items) {
      if (this.items.hasOwnProperty(productId)) {
        sum += this.items[productId].totalPrice;
        deliveryFee = 150
      }
    }
      return sum += deliveryFee;
    }
  get delivery() {
    const delivery = 100;
    return delivery 
  }
  get totalItemsCount() {
    let count = 0;
    for (const productId in this.itemsMap) {
      if (this.itemsMap.hasOwnProperty(productId)) {
        count += this.itemsMap[productId].quantity;
      }
    }
    return count;
  }

}
