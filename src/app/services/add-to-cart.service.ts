import { Injectable } from "@angular/core";
import { ProductsService } from "./products.service";

@Injectable({
  providedIn: "root",
})
export class AddToCartService {
  constructor(private productsService: ProductsService) {}
  productsList = this.productsService.productsList;
  addedProducts = [];

  getProductItemFromProductsList(currentProductId) {
    let product = this.productsList.find((product) => product.id === currentProductId);
    this.addToCart(product);
  }

  addToCart(product) {
    this.addedProducts.push(product);
  }

  getItems() {
    console.log(this.addedProducts);
    return this.addedProducts;
  }

  clearCart() {
    this.addedProducts = [];
    return this.addedProducts;
  }
}
