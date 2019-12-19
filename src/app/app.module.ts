import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { ProductService } from "./services/product.service";
import { ProductPageComponent } from "./components/product-page/product-page.component";
import { AppRoutingModule, routingComponents } from "./app-routing.module";
import { HomePageComponent } from "./components/home-page/home-page.component";

@NgModule({
  declarations: [AppComponent, routingComponents],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule {}
