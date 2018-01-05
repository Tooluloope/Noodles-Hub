import { AngularFireDatabaseModule } from 'angularfire2/database/database.module';
import { AngularFireAuthModule } from 'angularfire2/auth/auth.module';
import { CommonModule } from '@angular/common';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MDBBootstrapModule, NavbarModule } from 'angular-bootstrap-md';
import { CustomFormsModule } from 'ng2-validation';

import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductQuantityComponent } from './components/product-quantity/product-quantity.component';
import { AuthGuard } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { OrderService } from './services/order.service';
import { ProductService } from './services/product.service';
import { RestaurantService } from './services/restaurant.service';
import { ShoppingCartService } from './services/shopping-cart.service';
import { UserService } from './services/user.service';
import { DataTableModule } from 'angular-4-data-table-bootstrap-4';
import { LazyLoadImageModule } from 'ng-lazyload-image';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LazyLoadImageModule,
    CustomFormsModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    DataTableModule,
    CustomFormsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    NavbarModule,
  ],
  declarations: [
    ProductCardComponent,
    ProductQuantityComponent
  ],
  exports: [
    ProductCardComponent,
    ProductQuantityComponent,
    CommonModule,
    LazyLoadImageModule,
    FormsModule,
    CustomFormsModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    DataTableModule,
    CustomFormsModule,
    MDBBootstrapModule.forRoot().ngModule,
    FormsModule,
    NavbarModule,
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [
    AuthService,
    OrderService,
    UserService,
    ShoppingCartService,
    AuthGuard,
    ProductService,
    RestaurantService
  ]
})
export class SharedModule { }
