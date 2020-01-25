import { Component, OnInit } from "@angular/core";
import { Product } from "../../model/product";
import { ActivatedRoute } from "@angular/router";
import { UserService } from "../../services/user.service";
@Component({
  selector: "app-product-page",
  templateUrl: "./product-page.component.html",
  styleUrls: ["./product-page.component.css"]
})
export class ProductPageComponent implements OnInit {
  productId: string;
  currentProduct: Product;

  constructor(private route: ActivatedRoute, private userService: UserService) {
    this.currentProduct = JSON.parse(localStorage.getItem("currentProduct"));
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      if (params.has("id")) {
        this.productId = params.get("id");
      }
    });
  }

  onAddToCart(product) {
    this.userService.onAddToCart(product);
  }
}
