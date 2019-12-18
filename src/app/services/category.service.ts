import { Injectable } from "@angular/core";
import { Category } from "../common/category";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class CategoryService {
  private _url = "http://localhost:8080/categories";

  constructor(private httpClient: HttpClient) {}

  getCategoryList(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(this._url);
  }
}
