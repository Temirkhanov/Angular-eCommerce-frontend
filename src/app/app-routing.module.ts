import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductListComponent } from "./components/product-list/product-list.component";
import { CartComponent } from "./components/cart/cart.component";
import { HomePageComponent } from "./components/home-page/home-page.component";
import { ProductPageComponent } from "./components/product-page/product-page.component";
import { LoginComponent } from "./components/user/login/login.component";
import { RegisterComponent } from "./components/user/register/register.component";
import { ProfileComponent } from "./components/user/profile/profile.component";
import { DashboardComponent } from "./components/admin/dashboard/dashboard.component";
import { UserListComponent } from "./components/admin/user-list/user-list.component";
import { ProductListAdminComponent } from "./components/admin/product-list-admin/product-list-admin.component";
import { UnathorizedComponent } from "./components/error/unathorized/unathorized.component";
import { NotFoundComponent } from "./components/error/not-found/not-found.component";
import { AuthGuard } from "./guards/auth.guard";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomePageComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "profile", component: ProfileComponent, canActivate: [AuthGuard] },
  { path: "catalog", component: ProductListComponent },
  { path: "product/:id", component: ProductPageComponent },
  { path: "shopping-cart", component: CartComponent },

  //admin panel
  {
    path: "dashboard",
    component: DashboardComponent
  },
  {
    path: "user-list",
    component: UserListComponent
  },
  {
    path: "product-list",
    component: ProductListAdminComponent
  },

  //error pages
  { path: "404", component: NotFoundComponent },
  { path: "401", component: UnathorizedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [
  ProductListComponent,
  CartComponent,
  ProductPageComponent,
  HomePageComponent
];
