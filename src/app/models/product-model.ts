import{ CategoryModel} from './category-model'

export class ProductModel {

    Name: string;
    Category: CategoryModel;
    Price: number;
    Supermarket: string;
    Icon: URL;

    constructor(public title: string, public category: CategoryModel, public price: number, public supermarket: string, public icon: URL){
        this.Name = title;
        this.Category = category;
        this.Price = price;
        this.Supermarket = supermarket;
        this.Icon;
    }

    
}