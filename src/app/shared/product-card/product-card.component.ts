import { Component, OnInit, Input  } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  constructor() { }

  @Input() productName: string;
  @Input() productPrice: string;
  ngOnInit(): void {
  }

}
