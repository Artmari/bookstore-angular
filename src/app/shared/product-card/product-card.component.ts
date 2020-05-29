import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-product-card",
  templateUrl: "./product-card.component.html",
  styleUrls: ["./product-card.component.scss"],
})
export class ProductCardComponent implements OnInit {
  constructor() {}

  @Input() product: any;
  @Input() productName: string;
  @Input() productPrice: string;
  @Input() productId: string;
  @Input() buttonName: string;
  
  ngOnInit(): void {}

  handleAddProductClick(evnt) {
    console.log(evnt._elementRef.nativeElement.id);
  }
}
