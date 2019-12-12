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
  private baseUrl = "http://localhost:8080/api/products";

  // Injecting httpClient
  constructor(private httpClient: HttpClient) {}

  // Map the JSON data from Spring Data REST to Product array
  getProductList(): Observable<Product[]> {
    return this.httpClient
      .get<GetResponse>(this.baseUrl)
      .pipe(map(response => response._embedded.products));
  }
}

// Supporting interface. Helps with the mapping. Unwrappes the JSON data from Sring Rest API
interface GetResponse {
  _embedded: {
    products: Product[];
  };
}
