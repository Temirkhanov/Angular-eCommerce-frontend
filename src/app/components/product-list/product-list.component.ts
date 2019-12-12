import { Component, OnInit } from "@angular/core";
import { ProductService } from "src/app/services/product.service";
import { Product } from "src/app/common/product";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  products: Product[];

  // Injecting ProductService
  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.listProducts();
  }

  listProducts() {
    // Method is invoked once you "subscribe"
    this.productService.getProductList().subscribe(data => {
      this.products = data; // Assign results to Product Array
    });
  }
}
