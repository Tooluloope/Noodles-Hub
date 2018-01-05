import {Component, OnInit} from '@angular/core';

import {AuthService} from '../../../shared/services/auth.service';
import {Router} from '@angular/router';
import {AppUser} from '../../../shared/model/app.user';
import {ShoppingCartService} from '../../../shared/services/shopping-cart.service';
import {Observable} from 'rxjs/Observable';
import {ShoppingCart} from '../../../shared/model/shopping-cart';

@Component({
  selector: 'app-bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {
  public isCollapsed = false;
  appUser: AppUser;
  cart$: Observable<ShoppingCart>;
  constructor(private auth: AuthService, private route: Router,
              private shoppingCartService: ShoppingCartService) {
  }

 async ngOnInit() {
    this.auth.appUser$.subscribe(appUser => this.appUser = appUser);

    this.cart$ = await this.shoppingCartService.getCart();
  }
  logout() {
    this.auth.logout();
    this.route.navigate(['/login']);
  }
}
