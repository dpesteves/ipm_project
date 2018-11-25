export class ProductModel {

    Name: string;
    Category_id: string;
    Price: number;
    Supermarket: string;
    Icon: string;
    Quantity: number;
    initial_price: number;
    discount: number;

    constructor(title: string, category: string, price: number, supermarket: string, icon: string, discount: number){
        this.Name = title;
        this.Category_id = category;
        this.Price = price;
        this.Supermarket = supermarket;
        this.Icon = icon;
        this.Quantity = 1;
        this.initial_price = price;
        this.discount = discount;
    }
    
    addQuantity(){
        this.Quantity++;
    }

    editQuantity(val){

        this.Quantity = val;
        this.Price = this.initial_price * this.Quantity;

    }
}