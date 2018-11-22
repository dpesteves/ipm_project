import{ CategoryModel} from './category-model';

export class ProductModel {

    Name: string;
    Category_id: string;
    Price: number;
    Supermarket: string;
    Icon: string;
    Quantity: number;
    initial_price: number;

    constructor(title: string, category: string, price: number, supermarket: string, icon: string){
        this.Name = title;
        this.Category_id = category;
        this.Price = price;
        this.Supermarket = supermarket;
        this.Icon = icon;
        this.Quantity = 1;
        this.initial_price = price;
    }
    
    addQuantity(){
        this.Quantity++;
    }

    editQuantity(val){

        this.Quantity = val;
        this.Price = this.initial_price * this.Quantity;

    }
}