import { Component, OnInit, Input } from "@angular/core";

import { AddToCartService } from "../../services/add-to-cart.service";

@Component({
  selector: "app-product-card",
  templateUrl: "./product-card.component.html",
  styleUrls: ["./product-card.component.scss"],
})
export class ProductCardComponent implements OnInit {
  constructor(private addToCartService: AddToCartService) {}

  @Input() product: any;
  @Input() productName: string;
  @Input() productPrice: string;
  @Input() productId: string;
  @Input() buttonName: string;

  ngOnInit(): void {}

  handleAddProductClick(evnt) {
    let productId = evnt._elementRef.nativeElement.id;
    console.log(productId);
    this.addToCartService.getProductItemFromProductsList(productId);
  }
}
