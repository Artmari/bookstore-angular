import { Injectable } from "@angular/core";
import { ProductsService } from "./products.service";
import { Product } from "../shared/product-card/Product";

@Injectable({
  providedIn: "root",
})
export class AddToCartService {
  constructor(private productsService: ProductsService) {}
  productsList = this.productsService.productsList;
  addedProducts: Product[];

  getProductItemFromProductsList(currentProductId: string) {
    let product: Product = this.productsList.find(
      (product) => product.id === currentProductId
    );
    this.addToCart(product);
  }

  addToCart(product :Product) {
    this.addedProducts.push(product);
  }

  getItems(): Product[] {
    return this.addedProducts;
  }

  clearCart() {
    this.addedProducts = [];
    return this.addedProducts;
  }
}
