import { Component, OnInit } from "@angular/core";
import { ProductService } from "src/app/services/product.service";
import { Product } from "src/app/common/product";
import { Router } from "@angular/router";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  products: Product[];

  // Injecting ProductService
  constructor(
    private _productService: ProductService,
    private router: Router
  ) {}

  ngOnInit() {
    this._productService
      .getProductList()
      .subscribe(data => (this.products = data)); // Get data by subscribing
  }

  onSelect(product) {
    this.router.navigate(["/product", product.id]);
  }

  onAddToCart(id) {
    this._productService.onAddToCart(id);
  }
}
