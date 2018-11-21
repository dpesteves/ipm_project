import{ CategoryModel} from './category-model';

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