import { Component, OnInit } from "@angular/core";
import { UserService } from "../../services/user.service";
import { User } from "../../model/user";
import { Role } from "../../model/role";
import { Router } from "@angular/router";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  currentUser: User;

  constructor(private userService: UserService, private router: Router) {
    this.userService.currentUser.subscribe(data => {
      this.currentUser = data;
    });
  }

  ngOnInit() {}

  logOut() {
    this.userService.logOut().subscribe(data => {
      this.router.navigate(["/login"]);
    });
  }

  get isAdmin() {
    return this.currentUser && this.currentUser.role === Role.ADMIN;
  }
}
