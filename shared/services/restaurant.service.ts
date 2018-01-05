import { Injectable } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';

@Injectable()
export class RestaurantService {
  public getAll$;
  constructor(private db: AngularFireDatabase) { }

  getAll() {
    if (!this.getAll$) {
      this.getAll$ = this.db.list('/restaurant', {
        query: {
          orderByChild: 'name'
        }
      }).publishReplay(1).refCount();
    }
    return this.getAll$;
  }
}

