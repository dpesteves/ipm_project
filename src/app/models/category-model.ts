import { ProductModel } from './product-model';

export class CategoryModel {

    //#region Leaf Constants
    public static COOKIES_LEAF = "Cookies";
    
    public static Cheese_LEAF = "Cheese";
    public static MILK_LEAF = "Milk";
    public static YOUGURT_LEAF = "Yougurt";
    
    public static BEER_LEAF = "Beer";
    public static WINE_LEAF = "Wine";
    public static SODA_LEAF = "Soda";
    //#endregion

    //#region Root Constants
    public static DARRY_ROOT = "Darry Products";
    public static BEVERAGES_ROOT = "Beverages";
    public static SWEETS_SNACKS_ROOT = "Sweets and Snacks";
    //#endregion
    

    public Name: string;
    Type: string;
    children = new Array<CategoryModel>();
    products = new Array<ProductModel>();
    childrenCount: number;

    constructor(name: string, type: string){
        this.Name = name;
        this.Type = type;
        this.childrenCount = 0;
    }

    addChild(category: CategoryModel){
        if(this.Type == "node")
            this.children.push(category);
    }

    addProduct(product: ProductModel){
        
        if(this.Type == "leaf"){
            this.products.push(product);
        }
    }

    bulkProducts(products_in: Array<ProductModel>){

        if(this.Type == "leaf"){
            this.products = products_in;
        }
    }

}