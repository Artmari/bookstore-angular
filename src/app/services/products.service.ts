import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { HttpService } from "./http.service";

@Injectable({
  providedIn: "root",
})
export class ProductsService {
  constructor(private httpService: HttpService) {}

  private readonly _productsList = new BehaviorSubject([]);

  readonly productsList$ = this._productsList.asObservable();

  get products() {
    return this._productsList.getValue();
  }

  // getData() {
  //   this.httpService
  //     .getData()
  //     .subscribe((data) => (this.productsList = data.responce));
  // }
}
