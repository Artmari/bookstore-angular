import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { HttpService } from "./http.service";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class ProductsService {
  productsList = [];
  constructor(private httpService: HttpService) {
    this.httpService
      .getData()
      .subscribe((data) => (this.productsList = data.responce));
  }

  


}
// private readonly _productsList = new BehaviorSubject([]);

// readonly productsList$ = this._productsList.asObservable();

// readonly addedProduct$ = this.productsList$.pipe(
//   map((products) => products.filter((todo) => todo.isAdded))
// );

// get products() {
//   return this._productsList.getValue();
// }

// set products(val) {
//   this._productsList.next(val);
// }
