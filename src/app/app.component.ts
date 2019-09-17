import { Component, OnInit } from "@angular/core";
import { Model, ShoppingCartItem } from "./model";
import { Product } from "./product.entity";
import { ProductService } from "./product.service";


@Component({
  selector: "shoppingCart-app",
  templateUrl: "app.component.html"
})

export class AppComponent implements OnInit {
  private products: Product[];
  private totalPrice: number = 0;
  constructor(
    private productService: ProductService
  ) { }

  model = new Model();
  getShoppingCartItems() {
    return this.model.items;
  }

 // The performance can be improved if the datatype is map, that way search using key would be faster
 //
  addItemToShoppingCart(product, quantity, price) {
    var productUpdated= false;

    if (quantity > 0) {

      for (var item of this.model.items) {
         
        if (item.product === product) {
          item.quantity = +item.quantity+ +quantity;
          item.price = item.price + price;
          productUpdated = true;
        }
   }    

      
      if (!productUpdated) {
        this.model.items.push(new ShoppingCartItem(product, quantity, price));
      }
      this.totalPrice = this.totalPrice + price;
    }
  }

  ngOnInit() {
    this.products = this.productService.findAll();
  }

  getProduct(id: string): Product {
    return this.productService.find(id);

  }

  getTotal() {
    var total = 0;
    for (let item of this.model.items) {
      total = total + item.price;
    }
    return total;
  }

  clear() {
    this.model.items = [];
  }
}