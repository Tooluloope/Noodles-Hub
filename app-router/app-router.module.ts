import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders } from "@angular/core/src/metadata/ng_module";
import { RouterModule, Routes } from "@angular/router";

export const router: Routes = [
{
    path: '',
    loadChildren: 'app/core/core.module#CoreModule'
},
{
    path: 'restaurants',
    loadChildren: 'app/shared/shared.module#SharedModule'
},
{
    path: 'shopping-cart',
    loadChildren: 'app/shopping/shopping.module#ShoppingModule'
},
{
    path: 'admin/orders',
    loadChildren: 'app/admin/admin.module#AdminModule'
}
    
];

export const appRouter: ModuleWithProviders = RouterModule.forRoot(router);
