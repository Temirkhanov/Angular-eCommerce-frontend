import { Component, OnInit, ViewChild } from "@angular/core";
import { AdminService } from "../../../services/admin.service";
import { Transaction } from "../../../model/transaction";

@Component({
  selector: "app-transaction-list",
  templateUrl: "./transaction-list.component.html",
  styleUrls: ["./transaction-list.component.css"]
})
export class TransactionListComponent implements OnInit {
  transactionList: Array<Transaction>;
  dataSource: Array<Transaction> = new Array();
  displayedColumns: string[] = ["id", "user", "product"];

  constructor(private adminService: AdminService) {}

  ngOnInit() {
    this.findAllTransactions();
  }

  ngAfterViewInit() {}

  findAllTransactions() {
    this.adminService.findAllTransactions().subscribe(data => {
      this.transactionList = data;
      this.dataSource = data;
    });
  }
}
