import { ProductModel } from "./product-model";

export class ShoppingListModel {
    
    public static FAMILY = "Familia";
    public static FRIENDS = "Amigos";
    public static WORK = "Trabalho";

    items: Array<ProductModel>;
    name: string;
    createdOn: Date;
    owners: any[];
    
    constructor(title: string){
        this.name = title;
        this.items = new Array<ProductModel>();
    }

    getListName(){
        return this.name;
    }

    setName(name){
        this.name = name;
    }

    addItem(product: ProductModel){
        this.items.push(product);
    }

    removeItem(item_name: string){

        for(let i = 0; i < this.items.length; i++) {
            if(this.items[i].Name == item_name){
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
       
}