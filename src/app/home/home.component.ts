import { Component, OnInit } from "@angular/core";
import { ProductsService } from "../services/products.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  constructor(private productsService: ProductsService) {}

  items = [];

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.productsService
      .getData()
      .subscribe((data) => (this.items = data.responce));
  }
}
