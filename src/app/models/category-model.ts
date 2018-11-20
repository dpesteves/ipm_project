import { ProductModel } from './product-model';
import { Injectable } from '@angular/core';

export class CategoryModel {

    Name: string;
    Type: string;
    children: CategoryModel[];
    products: ProductModel[];

    constructor(title: string){
        this.Name = title;
    }

}