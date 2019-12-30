import { Component, OnInit } from "@angular/core";
import { ProductService } from "src/app/services/product.service";
import { Product } from "src/app/common/product";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {
  cartProducts: Map<Product, number>;
  constructor(private _productService: ProductService) {}

  ngOnInit() {
    this.cartProducts = this._productService.getCart();
  }
}
