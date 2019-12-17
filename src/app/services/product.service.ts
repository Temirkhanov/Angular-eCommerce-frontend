import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Product } from "../common/product";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class ProductService {
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
}
