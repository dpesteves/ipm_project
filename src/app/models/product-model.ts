import{ CategoryModel} from './category-model'
import { Injectable } from '@angular/core';
//import { HttpClientModule } from '@angular/common/http'; 
//import { HttpModule } from '@angular/http';

export class ProductModel {

    Name: string;
    Category: CategoryModel;
    Price: number;
    Supermarket: string;
    Icon: string;

    constructor(title: string, category: CategoryModel, price: number, supermarket: string, icon: string){
        this.Name = title;
        this.Category = category;
        this.Price = price;
        this.Supermarket = supermarket;
        this.Icon = icon;
    }    
}