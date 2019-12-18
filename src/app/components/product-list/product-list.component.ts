import { Component, OnInit } from "@angular/core";
import { ProductService } from "src/app/services/product.service";
import { Product } from "src/app/common/product";
import { Category } from "src/app/common/category";
import { CategoryService } from "src/app/services/category.service";

// @Component({
//   selector: "app-product-list",
//   templateUrl: "./product-list.component.html",
//   // templateUrl: "./product-list.component.html",
//   styleUrls: ["./product-list.component.css"]
// })
// export class ProductListComponent implements OnInit {
//   products: Product[];

//   // Injecting ProductService
//   constructor(private _productService: ProductService) {}

//   ngOnInit() {
//     this._productService
//       .getProductList()
//       .subscribe(data => (this.products = data)); // Get data by subscribing
//   }
// }

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  // templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  categories: Category[];

  // Injecting ProductService
  constructor(private _productService: CategoryService) {}

  ngOnInit() {
    this._productService
      .getCategoryList()
      .subscribe(data => (this.categories = data)); // Get data by subscribing
  }
}
