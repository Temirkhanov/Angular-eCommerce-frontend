import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Product } from "../common/product";
import { Observable } from "rxjs";
import { Order } from "src/app/common/order";
import { AppComponent } from "../app.component";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  cartProducts: Array<Product> = [];
  navbarCartCount: number = 0;
  // URL for Spring Boot REST API
  private _url = "http://localhost:8080/products";

  // Injecting httpClient as a dependency
  constructor(private httpClient: HttpClient) {}

  // Map the JSON data from Spring Data REST to Product array
  // Returns Observable of type Product array
  getProductList(): Observable<Product[]> {
    // Get request from products. Type - array of Product
    return this.httpClient.get<Product[]>(this._url);
  }
  getProduct(id): Observable<Product> {
    // Get request from products. Type - array of Product
    return this.httpClient.get<Product>(this._url + "/" + id);
  }
  onAddToCart(item: Product) {
    this.cartProducts.push(item);
    this.navbarCartCount++;
  }
}
