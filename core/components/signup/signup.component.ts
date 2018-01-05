import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../../../shared/services/auth.service';
import * as firebase from 'firebase';
import {AngularFireDatabase} from 'angularfire2/database';
import {UserService} from '../../../shared/services/user.service';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private auth: AuthService,
              private db: AngularFireDatabase,
              private user: UserService) { }

  ngOnInit() {
  }
  onSignup(form: NgForm) {

    const email = form.value.email;
    const password = form.value.password;
    const displayName = form.value.username;

    this.auth.signUp(email, password, displayName)
      
      
  }
  loginWithGoogle() {
    this.auth.loginWithGoogle();
  }
  loginWithFacebook() {
    this.auth.loginWithFacebook();
  }
}
