import { ProductModel } from "./product-model";
import { Injectable } from '@angular/core';

export class ShoppingListModel {
    
    items: ProductModel[];
    counter: number;
    name: string;
    createdOn: Date;
    owners: any[];

    
    constructor(title: string){
        this.name = title;
        this.items = new Array<ProductModel>();
        this.counter = 0;
    }

    setName(name){
        this.name = name;
    }

    addItem(product: ProductModel){
        this.items[this.counter] = product;
        this.counter++;
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