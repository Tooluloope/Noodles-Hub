import { Component } from '@angular/core';

import {AuthService} from '../auth.service';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor( private auth: AuthService) {

  }
  loginWithGoogle() {
    this.auth.loginWithGoogle();
  }
  loginWithFacebook() {
    this.auth.loginWithFacebook();
  }
  onSignin(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.auth.signIn(email, password);

  }
}
