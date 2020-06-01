import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { ProductsService } from "./products.service"

@Injectable({
  providedIn: "root",
})
export class AddToCartService {
  constructor(private productsService: ProductsService) {}

  private product = new BehaviorSubject("product");
  sharedProduct = this.product.asObservable();

  nextProduct(product) {
    this.product.next(product);
  }
}
