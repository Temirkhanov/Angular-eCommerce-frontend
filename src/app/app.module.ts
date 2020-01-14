import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { ProductPageComponent } from "./components/product-page/product-page.component";
import { AppRoutingModule, routingComponents } from "./app-routing.module";
import { HomePageComponent } from "./components/home-page/home-page.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { CartCalComponent } from "./components/cart-cal/cart-cal.component";
import { LoginComponent } from "./components/user/login/login.component";
import { RegisterComponent } from "./components/user/register/register.component";
import { ProfileComponent } from "./components/user/profile/profile.component";
import { DashboardComponent } from "./components/admin/dashboard/dashboard.component";
import { UserListComponent } from "./components/admin/user-list/user-list.component";
import { ProductListAdminComponent } from "./components/admin/product-list-admin/product-list-admin.component";
import { NotFoundComponent } from "./components/error/not-found/not-found.component";
import { UnathorizedComponent } from "./components/error/unathorized/unathorized.component";
import { TransactionListComponent } from "./components/admin/transaction-list/transaction-list.component";
import { ProductListComponent } from "./components/product-list/product-list.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    NavbarComponent,
    CartCalComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    DashboardComponent,
    UserListComponent,
    ProductListAdminComponent,
    NotFoundComponent,
    UnathorizedComponent,
    TransactionListComponent,
    ProductPageComponent,
    HomePageComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
