import { Component, OnInit } from "@angular/core";
import { AddToCartService } from "../services/add-to-cart.service";
import { Product } from "../shared/product-card/Product";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
})
export class ProfileComponent implements OnInit {
  constructor(private addToCartService: AddToCartService) {}

  addedProducts: Product[];

  ngOnInit() {
    this.addedProducts = this.addToCartService.getItems();
  }
}
