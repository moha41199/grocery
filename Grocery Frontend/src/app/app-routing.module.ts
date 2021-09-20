import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{UsersComponent} from './admin/users/users.component';
import { ProductsComponent } from './admin/products/products.component';
import {LoginComponent} from './login/login.component';
import {MenuComponent} from './menu/menu.component';
import { ShopproductComponent } from './shopproduct/shopproduct.component';
import {LoginadminComponent} from './loginadmin/loginadmin.component';
const routes: Routes = [{path:'admin/users',component:UsersComponent},
{path: 'admin/products',component: ProductsComponent},
{path:'shop',component:ShopproductComponent},{path: 'login',component:LoginComponent},{path:'app-menu',component:MenuComponent},
{ path: 'loginadmin',component: LoginadminComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
