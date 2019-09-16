export class Model {
    items;
    
    constructor() {
        this.items = [new ShoppingCartItem("Bread", 1, 3),
                      new ShoppingCartItem("Apple", 1, 1),
                      new ShoppingCartItem("Orange", 1, 2)
                      ]
    }
}

export class ShoppingCartItem {
    product;
    quantity;
    price;

    constructor(product, quantity, price) {
        this.product = product;
        this.quantity = quantity;
        this.price = price;
    }
}
