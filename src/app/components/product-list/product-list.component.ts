import { Component, OnInit, ViewChild, ChangeDetectorRef } from "@angular/core";
import { UserService } from "../../services/user.service";
import { User } from "../../model/user";
import { Product } from "../../model/product";
import { Transaction } from "../../model/transaction";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  productList: Array<Product>;
  errorMessage: string;
  infoMessage: string;
  currentUser: User;

  constructor(
    private userService: UserService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {
    // Get current user from local storage
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
  }

  ngOnInit() {
    this.userService
      .findAllProducts()
      .subscribe(data => (this.productList = data));
    console.log(this.productList + "---");
    //   .getProductList()
    //   .subscribe(data => (this.products = data)); // Get data by subscribing
  }

  purchaseProduct(product: Product) {
    if (!this.currentUser) {
      this.errorMessage = "You should sign in to purchase a product";
      return;
    }
    var transaction = new Transaction();
    transaction.product = product;
    transaction.user = this.currentUser;
    this.userService.purchaseProduct(transaction).subscribe(
      data => {
        this.infoMessage = "Mission is completed.";
      },
      err => {
        this.errorMessage = "Unexpected error occurred";
      }
    );
  }

  detail(product: Product) {
    localStorage.setItem("currentProduct", JSON.stringify(product));
    this.router.navigate(["/detail", product.id]);
  }

  onAddToCart(id) {
    this.userService.onAddToCart(id);
  }
}
