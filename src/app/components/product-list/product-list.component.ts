import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user.service";
import { Product } from "../../model/product";
import { Router } from "@angular/router";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  products: Product[];

  // Injecting ProductService
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    // this.userService
    //   .getProductList()
    //   .subscribe(data => (this.products = data)); // Get data by subscribing
  }

  onSelect(product) {
    this.router.navigate(["/product", product.id]);
  }

  onAddToCart(id) {
    // this._productService.onAddToCart(id);
  }
}
