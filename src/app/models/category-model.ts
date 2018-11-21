import { ProductModel } from './product-model';

export class CategoryModel {

    Name: string;
    Type: string;
    children = new Array<CategoryModel>();
    products = new Array<ProductModel>();
    childrenCount: number;

    constructor(name: string, type: string){
        this.Name = name;
        this.Type = type;
        this.childrenCount = 0;
    }

    addChild(name: string){
        if(this.Type == "node")
            this.children.push(new CategoryModel(name, "leaf"));
    }

    addProduct(){

    }

}