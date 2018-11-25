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
    public static DAIRY_ROOT = "Dairy Products";
    public static BEVERAGES_ROOT = "Beverages";
    public static SWEETS_SNACKS_ROOT = "Sweets and Snacks";
    //#endregion
    
    public static NODE = "node";
    public static ROOT = "Root";
    public static LEAF = "leaf";

    public Name: string;
    Type: string;
    public children = new Array<CategoryModel>();
    products = new Array<ProductModel>();
    childrenCount: number;
    show: boolean;

    constructor(name: string, type: string){
        this.Name = name;
        this.Type = type;
        this.childrenCount = 0;

        this.show = false;

    }

    addChild(category: CategoryModel){
        if(this.Type == CategoryModel.ROOT)
            this.children.push(category);
    }

    addProduct(product: ProductModel){
        
        if(this.Type == CategoryModel.LEAF){
            this.products.push(product);
        }
    }

    bulkProducts(products_in: Array<ProductModel>){


        if(this.Type == CategoryModel.LEAF){
            this.products = products_in;
        }
    }

}