import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Product } from "../common/product";
import { Observable } from "rxjs";
import { AppComponent } from "../app.component";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  cartProducts: Map<Product, number> = new Map();
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
    if (this.cartProducts.has(item)) {
      this.cartProducts.set(item, this.cartProducts.get(item) + 1);
    } else {
      this.cartProducts.set(item, 1);
    }
    this.navbarCartCount++;
  }
  getCart() {
    return this.cartProducts;
  }
}
