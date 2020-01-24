import { Component, OnInit } from "@angular/core";
import { Product } from "../../model/product";
import { UserService } from "../../services/user.service";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {
  cartProducts: Product[];
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.cartProducts = this.userService.getCart();
  }

  removeFromCart(item: Product) {
    console.log("Removing " + item.name);
    this.userService.removeItem(item);
  }
}
