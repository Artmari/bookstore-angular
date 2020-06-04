import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { HttpService } from "./http.service";
import { map } from "rxjs/operators";
import { Product } from "../shared/product-card/Product";

@Injectable({
  providedIn: "root",
})
export class ProductsService {
  productsList: Product[] = [];
  constructor(private httpService: HttpService) {
    this.httpService
      .getData()
      .subscribe((data) => (this.productsList = data.responce));
  }
}

