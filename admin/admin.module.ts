import { AuthGuard } from '../shared/services/auth-guard.service';
import { RouterModule } from '@angular/router';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { AdminOrdersComponent } from './components/admin-orders/admin-orders.component';
import { RestaurantFormComponent } from './components/product-form/restaurant-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminAuthGuard } from 'app/admin/services/admin-auth-guard.service';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'shared/shared.module';
import { DataTableModule } from 'angular-4-data-table-bootstrap-4';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: 'admin/restaurants/new', component: RestaurantFormComponent, canActivate: [AuthGuard, AdminAuthGuard]},
      { path: 'admin/restaurants/:id', component: RestaurantFormComponent, canActivate: [AuthGuard, AdminAuthGuard]},
      { path: 'admin/restaurants', component: AdminProductsComponent, canActivate: [AuthGuard, AdminAuthGuard]},
      { path: 'admin/orders', component: AdminOrdersComponent, canActivate: [AuthGuard, AdminAuthGuard]}
    ])
  ],
  declarations: [
    AdminProductsComponent,
    AdminOrdersComponent,
    RestaurantFormComponent
  ],
  exports: [
    AdminProductsComponent,
    AdminOrdersComponent,
    RestaurantFormComponent
  ],
  providers: [
    AdminAuthGuard
  ]
})
export class AdminModule { }
