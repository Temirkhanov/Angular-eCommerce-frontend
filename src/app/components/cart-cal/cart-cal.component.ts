import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChange,
  SimpleChanges
} from "@angular/core";
import { Product } from "../../model/product";

@Component({
  selector: "app-cart-cal",
  templateUrl: "./cart-cal.component.html",
  styleUrls: ["./cart-cal.component.css"]
})
export class CartCalComponent implements OnInit {
  @Input() products: Product[];
  subtotal = 0;
  shipping = 5;
  total = 0;

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    const dataChanges: SimpleChange = changes.products;
    const products: Product[] = dataChanges.currentValue;
    this.subtotal = 0;
    products.forEach(product => {
      this.subtotal += product.price;
    });
    this.total = this.subtotal + this.shipping;
  }

  ngOnInit() {}
}
