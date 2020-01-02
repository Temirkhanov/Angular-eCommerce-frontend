import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChange,
  SimpleChanges
} from "@angular/core";
import { Product } from "src/app/common/product";

@Component({
  selector: "app-cart-cal",
  templateUrl: "./cart-cal.component.html",
  styleUrls: ["./cart-cal.component.css"]
})
export class CartCalComponent implements OnInit {
  @Input() products: Map<Product, number>;
  subtotal = 0;
  shipping = 5;
  total = 0;

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    const dataChanges: SimpleChange = changes.products;
    const products: Map<Product, number> = dataChanges.currentValue;
    this.subtotal = 0;
    products.forEach((qty: number, prod: Product) => {
      this.subtotal += prod.unitPrice * qty;
    });
    this.total = this.subtotal + this.shipping;
  }

  ngOnInit() {}
}
