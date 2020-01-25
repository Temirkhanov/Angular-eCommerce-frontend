import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { User } from "../model/user";
import { Product } from "../model/product";
import { Transaction } from "../model/transaction";

// let API_URL = "https://rt-ecommerce.herokuapp.com/api/user/";
let API_URL = "http://localhost:8080/api/user/";

@Injectable({
  providedIn: "root"
})
export class UserService {
  // Observable User -> will be used from other component and reactively updated when log in/out.
  public currentUser: Observable<User>;
  // BeahaviorSubject User ->  will be used to subscribe current user
  private currentUserSubject: BehaviorSubject<User>;

  // Cart
  // private cart: Product[];
  cartCount: number;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem("currentUser"))
    );
    this.currentUser = this.currentUserSubject.asObservable();

    // Cart
    let cart = this.getCart();
    if (cart.length == 0) {
      this.cartCount = 0;
    } else {
      this.cartCount = cart.length;
    }
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  // ======== LOGIN ========
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

  // ======== LOGOUT ========
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

  // ======== REGISTER ========
  // POST - "/api/user/registration"
  // Send data in JSON format
  register(user: User): Observable<any> {
    return this.http.post(API_URL + "registration", JSON.stringify(user), {
      headers: { "Content-Type": "application/json; charset=UTF-8" }
    });
  }

  // ======== PRODUCTS ========
  // GET - "/api/user/products"
  findAllProducts(): Observable<any> {
    return this.http.get(API_URL + "products", {
      headers: { "Content-Type": "application/json; charset=UTF-8" }
    });
  }

  // ======== PURCHASE ========
  // POST - "/api/user/purchase"
  // Send data in JSON format
  purchaseProduct(transaction: Transaction): Observable<any> {
    return this.http.post(API_URL + "purchase", JSON.stringify(transaction), {
      headers: { "Content-Type": "application/json; charset=UTF-8" }
    });
  }

  // ======== SHOPPING CART ========
  public onAddToCart(item: Product) {
    let cart = this.getCart();
    cart.push(item);
    this.setLocalStorageCart(cart);
    this.cartCount++;
  }

  public getCart(): Product[] {
    let localStorageItem = JSON.parse(localStorage.getItem("cart"));
    return localStorageItem == null ? [] : localStorageItem.cart;
  }

  // public removeItem(id: number): void {
  //   let cart = this.getCart();
  //   cart = cart.filter(item => item.id != id);
  //   this.setLocalStorageCart(cart);
  // }

  public removeItem(product: Product): void {
    let cart = this.getCart();
    const index = cart.indexOf(product);
    cart.splice(index, 1);
    this.setLocalStorageCart(cart);
  }

  private setLocalStorageCart(cart: Product[]): void {
    localStorage.setItem("cart", JSON.stringify({ cart: cart }));
  }
}
