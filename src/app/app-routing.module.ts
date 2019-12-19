import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductListComponent } from "./components/product-list/product-list.component";
import { CartComponent } from "./components/cart/cart.component";
import { HomePageComponent } from "./components/home-page/home-page.component";
import { ProductPageComponent } from "./components/product-page/product-page.component";

const routes: Routes = [
  { path: "", component: HomePageComponent },
  { path: "catalog", component: ProductListComponent },
  { path: "product/:id", component: ProductPageComponent },
  { path: "shopping-cart", component: CartComponent }
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
