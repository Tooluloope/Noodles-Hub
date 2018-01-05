import { HttpClientModule } from '@angular/common/http';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { CloudinaryModule } from '@cloudinary/angular-4.x';
import { DataTableModule } from 'angular-4-data-table-bootstrap-4';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { Angular4PaystackModule } from 'angular4-paystack';
import { AngularFireModule } from 'angularfire2';
import { AdminModule } from 'app/admin/admin.module';
import { CoreModule } from 'app/core/core.module';
import { ShoppingModule } from 'app/shopping/shopping.module';
import * as Cloudinary from 'cloudinary-core';
import { SharedModule } from 'shared/shared.module';

import { environment } from '../environments/environment';
import { AdminAuthGuard } from './admin/services/admin-auth-guard.service';
import { appRouter } from './app-router/app-router.module';
import { AppComponent } from './app.component';
import { EmailValidator } from './email-validator.directive';


@NgModule({
  declarations: [
    AppComponent,
    EmailValidator
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'universal' }),
    MDBBootstrapModule.forRoot(),
    Angular4PaystackModule,
    DataTableModule,
    MDBBootstrapModule,
    CloudinaryModule.forRoot(Cloudinary, { cloud_name: 'dn1b66xo5'}),
    AdminModule,
    CoreModule,
    SharedModule,
    ShoppingModule,
    AngularFireModule.initializeApp(environment.firebase),
    BrowserAnimationsModule,
    HttpClientModule,
    appRouter,
    RouterModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [
    AdminAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
{ }
