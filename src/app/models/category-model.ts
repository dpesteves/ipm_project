import { ProductModel } from './product-model';

export class CategoryModel {

    Name: string;
    Type: string;
    children: CategoryModel[];
    products: ProductModel[];

    constructor(title: string){
        this.Name = title;
    }

}