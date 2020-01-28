import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { User } from "../model/user";
import { Product } from "../model/product";
import { Transaction } from "../model/transaction";

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
}
