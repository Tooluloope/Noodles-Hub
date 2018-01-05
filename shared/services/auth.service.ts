import { Injectable } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase';
import {Observable} from 'rxjs/Observable';
import {ActivatedRoute} from '@angular/router';
import {UserService} from './user.service';
import {AppUser} from '../model/app.user';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';




@Injectable()
export class AuthService {

  authState: any = null;

 user$: Observable<firebase.User>;
  constructor(private afAuth: AngularFireAuth,
              private route: ActivatedRoute,
              private userService: UserService) {
    this.user$ = this.afAuth.authState;
    this.afAuth.authState.subscribe((auth) => {
      this.authState = auth;
    });
  }
  // get authenticated(): boolean {
  //   return this.authState !== null;
  // }



  // // Returns current user UID
  // get currentUserId(): string {
  //   return this.authenticated ? this.authState.uid : '';
  // }



  loginWithGoogle() {
   const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
   localStorage.setItem('returnUrl', returnUrl);
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());

  }
  loginWithFacebook() {
    const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);
     this.afAuth.auth.signInWithPopup(
      new firebase.auth.FacebookAuthProvider()
    );
  }
  signUp(email, password, displayName: string) {
    const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);
    this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((user) => {
        this.authState.auth.updateUserData({
          displayName: displayName,
        })
        console.log(user);
        console.log(displayName);
    })
      .catch(error => {
        console.log(error);
        const errorCode = error.name;
        const errorMessage = error.message;});
  }



  signIn(email: string, password: string) {
    const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((user) => {
        this.authState = user;
        console.log(user);
      })
      
  }


  logout() {
    this.afAuth.auth.signOut();

  }
  get authenticated(): boolean {
    return this.authState !== null;
  }
  get currentUserId(): string {
    return this.authenticated ? this.authState.uid : '';
  }
  // private updateUserData(): void {
  //   // Writes user name and email to realtime db
  //   // useful if your app displays information about users or for admin features
  //     let path = `users/${this.currentUserId}`; // Endpoint on firebase
  //     let data = {
  //                   email: this.authState.email,
  //                   name: this.authState.displayName
  //                 }
  
  //     this.db.object(path).update(data)
  //     .catch(error => console.log(error));

  get appUser$(): Observable<AppUser> {
    return this.user$
      .switchMap(user => {
        if (user) {return this.userService.get(user.uid); }
        return Observable.of(null);
    });
  }
}
