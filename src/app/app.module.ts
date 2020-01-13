import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { ProductService } from "./services/product.service";
import { ProductPageComponent } from "./components/product-page/product-page.component";
import { AppRoutingModule, routingComponents } from "./app-routing.module";
import { HomePageComponent } from "./components/home-page/home-page.component";
import { NavbarComponent } from './components/navbar/navbar.component';
import { CartCalComponent } from './components/cart-cal/cart-cal.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { UserListComponent } from './components/admin/user-list/user-list.component';
import { ProductListComponent } from './components/admin/product-list/product-list.component';

@NgModule({
  declarations: [AppComponent, routingComponents, NavbarComponent, CartCalComponent, LoginComponent, RegisterComponent, ProfileComponent, DashboardComponent, UserListComponent, ProductListComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule {}
