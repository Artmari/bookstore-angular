import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AddToCartService {
  constructor() {}

  private product = new BehaviorSubject("product");
  sharedProduct = this.product.asObservable();

  nextProduct(product) {
    this.product.next(product);
  }
}
