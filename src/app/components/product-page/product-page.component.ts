import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { UserService } from "../../services/user.service";
import { Product } from "../../model/product";

@Component({
  selector: "app-product-page",
  templateUrl: "./product-page.component.html",
  styleUrls: ["./product-page.component.css"]
})
export class ProductPageComponent implements OnInit {
  product: Product;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // let id = parseInt(this.route.snapshot.paramMap.get("id"));
    // this.userService
    //   .getProduct(id)
    //   .subscribe(data => (this.product = data)); // Get data by subscribing
  }
}
