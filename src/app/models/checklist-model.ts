import { ProductModel } from "./product-model";
import { Injectable } from '@angular/core';

@Injectable()
export class ShoppingListModel {
    items: ProductModel[];
    counter: number;
    name: string;
    createdOn: Date;
    owners: any[];

    constructor(title: string){
        this.name = title;
        this.items = [];
        this.counter = 0;
    }

    addItem(product: ProductModel){
        this.items[this.counter] = product;
    }

    removeItem(item){
        for(let i = 0; i < this.items.length; i++) {
            if(this.items[i] == item){
                this.items.splice(i, 1);
            }
        }
    }

    renameItem(item, title){
        for(let i = 0; i < this.items.length; i++) {
            if(this.items[i] == item){
                this.items[i].Name = title;
            }
        }
    }

    setTitle(title){
        this.name = title;
    }

    getElements(){
        return this.items;
    }
       
}