import { ProductModel } from "./product-model";

export class ShoppingListModel {
    
    public static FAMILY = "Familia";
    public static FRIENDS = "Amigos";
    public static WORK = "Trabalho";

    items: Array<ProductModel>;
    name: string;
    createdOn: Date;
    owners: any[];
    total_price: number;
    
    constructor(title: string){
        this.name = title;
        this.items = new Array<ProductModel>();
        this.total_price = 0;
    }

    getListName(){
        return this.name;
    }

    setName(name){
        this.name = name;
    }

    addItem(product: ProductModel){
        this.items.push(product);
        this.total_price += product.Price;
    }

    removeItem(item_name: string){

        var product = null;

        for(let i = 0; i < this.items.length; i++) {
            if(this.items[i].Name == item_name){
                product = this.items[i];
                this.total_price -= product.Price;
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

    bullkAdd(products_in : Array<ProductModel>){
        this.items = products_in;
    }

    calculateTotalPrice(): number{

        var total_price = 0;

        for(let element of this.items){
            total_price += ((element.Price*element.discount)/100);
        }

        return total_price;
    }
       
}