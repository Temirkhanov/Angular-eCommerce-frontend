import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { User } from "../model/user";
import { Product } from "../model/product";
import { Transaction } from "../model/transaction";

let API_URL = "http://localhost:8080/api/admin/";

@Injectable({
  providedIn: "root"
})
export class AdminService {
  currentUser: User;
  headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
    this.headers = new HttpHeaders({
      authorization: "Bearer " + this.currentUser.token,
      "Content-Type": "application/json; charset=UTF-8"
    });
  }

  findAllUsers(): Observable<any> {
    return this.http.get(API_URL + "user-all", { headers: this.headers });
  }

  numberOfUsers(): Observable<any> {
    return this.http.get(API_URL + "user-number", { headers: this.headers });
  }

  findAllProducts(): Observable<any> {
    return this.http.get(API_URL + "product-all", { headers: this.headers });
  }

  numberOfProducts(): Observable<any> {
    return this.http.get(API_URL + "product-number", { headers: this.headers });
  }
}
