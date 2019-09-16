import { Injectable } from '@angular/core';
import { Product } from './product.entity';



@Injectable()
export class ProductService {

    private products: Product[];

    constructor() {
        this.products = [
            { id: 'p01', name: 'Apple', price: 1 },
            { id: 'p02', name: 'Orange', price: 2 },
            { id: 'p03', name: 'Bread', price: 3 }
        ];
    }

    findAll(): Product[] {
        return this.products;
    }

    find(id: string): Product {
        return this.products[this.getSelectedIndex(id)];
    }

    private getSelectedIndex(id: string) {
        for (var i = 0; i < this.products.length; i++) {
            if (this.products[i].id == id) {
                return i;
            }
        }
        return -1;
    }

}