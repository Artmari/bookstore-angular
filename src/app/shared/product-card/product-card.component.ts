import { Component, OnInit, Input } from "@angular/core";

import { AddToCartService } from "../../services/add-to-cart.service";
import { Product } from "./Product";

@Component({
  selector: "app-product-card",
  templateUrl: "./product-card.component.html",
  styleUrls: ["./product-card.component.scss"],
})
export class ProductCardComponent implements OnInit {
  constructor(private addToCartService: AddToCartService) {}

  @Input() product: Product;
  @Input() productName: string;
  @Input() productPrice: number;
  @Input() productId: string;
  @Input() buttonName: string;

  ngOnInit(): void {}

  handleAddProductClick(evnt) {
    let productId :string = evnt._elementRef.nativeElement.id;
    this.addToCartService.getProductItemFromProductsList(productId);
  }
}
