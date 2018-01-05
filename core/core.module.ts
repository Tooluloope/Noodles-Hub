import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LazyLoadImagesModule } from 'ngx-lazy-load-images';
import { SharedModule } from 'shared/shared.module';

import { BodyComponent } from './components/body/body.component';
import { BsNavbarComponent } from './components/bs-navbar/bs-navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RestaurantCardComponent } from './components/restaurant-card/restaurant-card.component';
import { SignupComponent } from './components/signup/signup.component';


@NgModule({
  imports: [
    SharedModule,
    LazyLoadImagesModule,
    RouterModule.forChild([
      { path: '', component: HomeComponent, data: {state: 'home'}},
       { path: 'login', component: LoginComponent, data: {state: 'login'}},
      { path: 'signup', component: SignupComponent, data: {state: 'signup'} },
    ])
  ],
  declarations: [
    BsNavbarComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    BodyComponent,
    FooterComponent,
    RestaurantCardComponent
  ],
  schemas: [NO_ERRORS_SCHEMA],
  exports:[
    BsNavbarComponent,
    FooterComponent,
    HomeComponent
  ]
})
export class CoreModule { }
