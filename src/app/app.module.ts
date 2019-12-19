import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ProductListComponent } from "./components/product-list/product-list.component";
import { HttpClientModule } from "@angular/common/http";
import { ProductService } from "./services/product.service";
import { NavComponent } from './components/nav/nav.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductPageComponent } from './components/product-page/product-page.component';

@NgModule({
  declarations: [AppComponent, ProductListComponent, NavComponent, CartComponent, ProductPageComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule {}
