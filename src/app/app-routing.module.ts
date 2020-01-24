import { NgModule } from "@angular/core";
import { Router, Routes, RouterModule } from "@angular/router";
import { ProductListComponent } from "./components/product-list/product-list.component";
import { CartComponent } from "./components/cart/cart.component";
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
import { Role } from "./model/role";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: ProductListComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  {
    path: "profile",
    component: ProfileComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.ADMIN, Role.USER] }
  },
  { path: "product/:id", component: ProductPageComponent },
  { path: "shopping-cart", component: CartComponent },

  //admin panel
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.ADMIN] }
  },
  {
    path: "user-list",
    component: UserListComponent,
    data: { roles: [Role.ADMIN] }
  },
  {
    path: "product-list",
    component: ProductListAdminComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.ADMIN] }
  },

  //error pages
  { path: "404", component: NotFoundComponent },
  { path: "401", component: UnathorizedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private router: Router) {
    this.router.errorHandler = (error: any) => {
      this.router.navigate(["/404"]);
    };
  }
}
export const routingComponents = [
  ProductListComponent,
  CartComponent,
  ProductPageComponent
];
