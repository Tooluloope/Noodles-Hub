import { Component } from '@angular/core';

import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import {AppUser} from '../models/app.user';

@Component({
  selector: 'app-bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent {
  public isCollapsed = false;
  appUser: AppUser;
  constructor(private auth: AuthService, private route: Router) {
    auth.appUser$.subscribe(appUser => this.appUser = appUser);
  }


  logout() {
    this.auth.logout();
    this.route.navigate(['/login']);
  }
}
