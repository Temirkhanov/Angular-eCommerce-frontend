import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Product } from "../common/product";
import { Observable } from "rxjs";
import { Order } from "src/app/common/order";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  productOrders: Map<number, number> = new Map();
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
  onAddToCart(id: number) {
    var qty = 1;
    if (this.productOrders.has(id)) {
      qty += this.productOrders.get(id);
    }
    this.productOrders.set(id, qty);
    this.productOrders.forEach((value: number, key: number) => {
      console.log(key, value);
    });
  }
}
