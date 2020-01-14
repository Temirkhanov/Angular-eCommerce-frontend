import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { User } from "../model/user";
import { Product } from "../model/product";
import { Transaction } from "../model/transaction";

let API_URL = "http://localhost:8080/api/user/";

@Injectable({
  providedIn: "root"
})
export class UserService {
  // Observable User -> will be used from other component and reactively updated when log in/out.
  public currentUser: Observable<User>;
  // BeahaviorSubject User ->  will be used to subscribe current user
  private currentUserSubject: BehaviorSubject<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem("currentUser"))
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  // Sends GET request to server side.
  login(user: User): Observable<any> {
    // Login auth will be provided with HttpHeader
    const headers = new HttpHeaders(
      user
        ? {
            // Auth header will be encrypted
            authorization: "Basic " + btoa(user.username + ":" + user.password)
          }
        : {}
    );

    return (
      this.http
        // GET - "/api/user/login"
        .get<any>(API_URL + "login", { headers: headers })
        .pipe(
          map(response => {
            // After login store result in local storage and subscribe
            if (response) {
              localStorage.setItem("currentUser", JSON.stringify(response));
              this.currentUserSubject.next(response);
            }
            return response;
          })
        )
    );
  }

  // POST - "/api/user/logout"
  logOut(): Observable<any> {
    return this.http.post(API_URL + "logout", {}).pipe(
      map(response => {
        // After logout remove result from local storage and unsubscribe
        localStorage.removeItem("currentUser");
        this.currentUserSubject.next(null);
      })
    );
  }

  // POST - "/api/user/registration"
  // Send data in JSON format
  register(user: User): Observable<any> {
    return this.http.post(API_URL + "registration", JSON.stringify(user), {
      headers: { "Content-Type": "application/json; charset=UTF-8" }
    });
  }

  // GET - "/api/user/products"
  findAllProducts(): Observable<any> {
    return this.http.get(API_URL + "products", {
      headers: { "Content-Type": "application/json; charset=UTF-8" }
    });
  }

  // POST - "/api/user/purchase"
  // Send data in JSON format
  purchaseProduct(transaction: Transaction): Observable<any> {
    return this.http.post(API_URL + "purchase", JSON.stringify(transaction), {
      headers: { "Content-Type": "application/json; charset=UTF-8" }
    });
  }
}