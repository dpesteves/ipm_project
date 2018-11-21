import { Component } from '@angular/core';
import { NavController, ModalController, NavParams } from 'ionic-angular';
import { ListPage } from '../list/list';
import { AddListPage } from '../add-list/add-list';
import { ShoppingListModel } from '../../app/models/shoppinglist-model';
import { ProductModel } from '../../app/models/product-model';
import { CategoryModel } from '../../app/models/category-model';

@Component({
  selector: 'page-lists',
  templateUrl: 'lists.html'
})
export class ListsPage {

  lists: ShoppingListModel[];

  //#region Products
  cookie_products: Array<ProductModel>;
  soda_products: Array<ProductModel>;
  
  milk_products: Array<ProductModel>;
  cheese_products: Array<ProductModel>;
  yougurt_products: Array<ProductModel>;


  
  beer_products: Array<ProductModel>;
  wine_products: Array<ProductModel>;
  meat_products: Array<ProductModel>;
  fish_products: Array<ProductModel>;
//#endregion

//#region Category Leafs
  category_leafs: Array<CategoryModel>;
  category_nodes: Array<CategoryModel>;
  category_roots: Array<CategoryModel>;
//#endregion

  counter:number;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public params: NavParams) {
    this.lists = new Array<ShoppingListModel>();

    //#region Initializing Product lists
    this.cookie_products = new Array<ProductModel>();
    this.soda_products = new Array<ProductModel>();
    this.milk_products = new Array<ProductModel>();
    this.cheese_products = new Array<ProductModel>();
    this.beer_products = new Array<ProductModel>();
    this.wine_products = new Array<ProductModel>();
    this.meat_products = new Array<ProductModel>();
    this.fish_products = new Array<ProductModel>();
    this.yougurt_products = new Array<ProductModel>();
    //#endregion

    //#region Initializing Categorys
    this.category_leafs = new Array<CategoryModel>();
    this.category_nodes = new Array<CategoryModel>();
    this.category_roots = new Array<CategoryModel>();  
    //#endregion

    this.createProducts();
    this.buildCategoryLeafs();
    this.buildCategoryRoots();
    this.buildDemoLists();

    console.log(this.lists[0]);
    
    this.counter = 3;
  }

  showList(name: string){
    let arg;
    for (let list of this.lists){
      if(name == list.name)
        arg=list;
    }
    if(arg != null)
      this.navCtrl.push(ListPage, arg.getElements());
    else
      this.navCtrl.push(ListPage);
  }

  showMenu(){
    const modal = this.modalCtrl.create(AddListPage, 0);
    modal.onDidDismiss(data => {
      if(data != null)
        this.addList(data);
    });
    modal.present();
  }

  addList(listName: string){
    this.lists[this.counter] = new ShoppingListModel(listName);
    this.counter++;
  }


  createProducts(){
    this.cookie_products.push(new ProductModel("Oreo - Continente", "Cookies", 2.5, "Continente", "empty"));
    this.cookie_products.push(new ProductModel("Oreo - Pingo Doce", "Cookies", 2.5, "Pingo Doce", "empty"));
    this.cookie_products.push(new ProductModel("Oreo - Lidl", "Cookies", 1.5, "Lidl", "empty"));

    this.cookie_products.push(new ProductModel("Filipinos - Continente", "Cookies", 2.5, "Continente", "empty"));
    this.cookie_products.push(new ProductModel("Filipinos - Pingo Doce", "Cookies", 2.5, "Pingo Doce", "empty"));
    this.cookie_products.push(new ProductModel("Filipinos - Lidl", "Cookies", 1.5, "Lidl", "empty"));

    this.cookie_products.push(new ProductModel("Chipmix - Continente", "Cookies", 2.5, "Continente", "empty"));
    this.cookie_products.push(new ProductModel("Chipmix - Pingo Doce", "Cookies", 2.5, "Pingo Doce", "empty"));
    this.cookie_products.push(new ProductModel("Chipmix - Lidl", "Cookies", 1.5, "Lidl", "empty"));

    this.soda_products.push(new ProductModel("Sumol - Continente", "Soda", 1.75, "Continente", "empty"));
    this.soda_products.push(new ProductModel("Sumol - Pingo Doce", "Soda", 1.75, "Pingo Doce", "empty"));
    this.soda_products.push(new ProductModel("Sumol - Lidl", "Soda", 1.75, "Lidl", "empty"));

    this.soda_products.push(new ProductModel("Coca Cola - Continente", "Soda", 1.75, "Continente", "empty"));
    this.soda_products.push(new ProductModel("Coca Cola - Pingo Doce", "Soda", 1.75, "Pingo Doce", "empty"));
    this.soda_products.push(new ProductModel("Coca Cola - Lidl", "Soda", 1.75, "Lidl", "empty"));

    this.soda_products.push(new ProductModel("Lipton Ice Tea - Continente", "Soda", 1.75, "Continente", "empty"));
    this.soda_products.push(new ProductModel("Lipton Ice Tea - Pingo Doce", "Soda", 1.75, "Pingo Doce", "empty"));
    this.soda_products.push(new ProductModel("Lipton Ice Tea - Lidl", "Soda", 1.75, "Lidl", "empty"));

    this.cheese_products.push(new ProductModel("Cheese - Continente", "Cheese", 1.0, "Continente", "empty"));
    this.cheese_products.push(new ProductModel("Cheese - Pingo Doce", "Cheese", 1.0, "Pingo Doce", "empty"));
    this.cheese_products.push(new ProductModel("Cheese - Lidl", "Cheese", 1.0, "Lidl", "empty"));

    this.milk_products.push(new ProductModel("Milk - Continente", "Milk", 1.5, "Continente", "empty"));
    this.milk_products.push(new ProductModel("Milk - Pingo Doce", "Milk", 1.5, "Pingo Doce", "empty"));
    this.milk_products.push(new ProductModel("Milk - Lidl", "Milk", 1.5, "Lidl", "empty"));

    this.yougurt_products.push(new ProductModel("Yougurt - Continente", "Yougurt", 0.75, "Continente", "empty"));
    this.yougurt_products.push(new ProductModel("Yougurt - Pingo Doce", "Yougurt", 1.0, "Pingo Doce", "empty"));
    this.yougurt_products.push(new ProductModel("Yougurt - Lidl", "Yougurt", 0.50, "Lidl", "empty"));

    this.beer_products.push(new ProductModel("Super Bock - Continente", "Beer and Wine", 0.50, "Continente", "empty"));
    this.beer_products.push(new ProductModel("Super Bock - Pingo Doce", "Beer and Wine", 0.50, "Pingo Doce", "empty"));
    this.beer_products.push(new ProductModel("Super Bock - Lidl", "Beer and Wine", 0.20, "Lidl", "empty"));

    this.beer_products.push(new ProductModel("Sagres - Continente", "Beer and Wine", 0.50, "Continente", "empty"));
    this.beer_products.push(new ProductModel("Sagres - Pingo Doce", "Beer and Wine", 0.50, "Pingo Doce", "empty"));
    this.beer_products.push(new ProductModel("Sagres - Lidl", "Beer and Wine", 0.20, "Lidl", "empty"));

    this.wine_products.push(new ProductModel("Porto - Continente", "Beer and Wine", 10, "Continente", "empty"));
    this.wine_products.push(new ProductModel("Porto - Pingo Doce", "Beer and Wine", 15, "Pingo Doce", "empty"));
    this.wine_products.push(new ProductModel("Porto - Lidl", "Beer and Wine", 7, "Lidl", "empty"));
     
  }


  buildCategoryLeafs(){

    var category = new CategoryModel(CategoryModel.COOKIES_LEAF, "leaf");
    category.bulkProducts(this.cookie_products);
    this.category_leafs.push(category);

    category = new CategoryModel(CategoryModel.SODA_LEAF, "leaf");
    category.bulkProducts(this.soda_products);
    this.category_leafs.push(category);

    category = new CategoryModel(CategoryModel.MILK_LEAF, "leaf");
    category.bulkProducts(this.milk_products);
    this.category_leafs.push(category);

    category = new CategoryModel(CategoryModel.Cheese_LEAF, "leaf");
    category.bulkProducts(this.cheese_products);
    this.category_leafs.push(category);

    category = new CategoryModel(CategoryModel.YOUGURT_LEAF, "leaf");
    category.bulkProducts(this.yougurt_products);
    this.category_leafs.push(category);

    category = new CategoryModel(CategoryModel.BEER_LEAF, "leaf");
    category.bulkProducts(this.beer_products);
    this.category_leafs.push(category);

    category = new CategoryModel(CategoryModel.WINE_LEAF, "leaf");
    category.bulkProducts(this.wine_products);
    this.category_leafs.push(category);

  }


  buildCategoryRoots(){


    var category = new CategoryModel(CategoryModel.DARRY_ROOT, "root");
    category.addChild(this.findCategory(CategoryModel.MILK_LEAF, this.category_leafs)); //MILK
    category.addChild(this.findCategory(CategoryModel.Cheese_LEAF, this.category_leafs)); //Cheese
    category.addChild(this.findCategory(CategoryModel.YOUGURT_LEAF, this.category_leafs)); //Yougurt
    this.category_roots.push(category);

    var category = new CategoryModel(CategoryModel.SWEETS_SNACKS_ROOT, "root");
    category.addChild(this.findCategory(CategoryModel.COOKIES_LEAF, this.category_leafs)); //Cookies
    this.category_roots.push(category);

    category = new CategoryModel(CategoryModel.BEVERAGES_ROOT, "node");
    category.addChild(this.findCategory(CategoryModel.BEER_LEAF, this.category_leafs)); //Beer
    category.addChild(this.findCategory(CategoryModel.WINE_LEAF, this.category_leafs));//Wine
    category.addChild(this.findCategory(CategoryModel.SODA_LEAF, this.category_leafs)); //
    this.category_roots.push(category);
  }

  
  findCategory(category_name: string, category_level: Array<CategoryModel>): CategoryModel{

    category_level.forEach((element) => {

      if(element.Name = category_name)
        return element;

    });

    return null;
  }

  findList(list_name: string, all_lists: Array<ShoppingListModel>): ShoppingListModel{

    all_lists.forEach((element) =>{

      if(element.name = list_name)
        return element;

    })

    return null;

  }


  
  buildDemoLists(){
    
    this.lists = [new ShoppingListModel(ShoppingListModel.FAMILY), new ShoppingListModel(ShoppingListModel.FRIENDS), new ShoppingListModel(ShoppingListModel.WORK)];
    this.lists[0].bullkAdd(this.soda_products);
    this.lists[1].bullkAdd(this.beer_products);
    this.lists[2].bullkAdd(this.cheese_products);

  }


}
