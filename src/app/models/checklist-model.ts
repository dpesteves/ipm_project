export class ShoppingListModel {
    
    items: any[];
    Name: string;
    cretedon: Date;
    Owners: any[];

       constructor(public title: string){
           this.items = new Array;
       }
    
       addItem(item){
           this.items.push({
               title: item,
               checked: false
           });
       }
    
       removeItem(item){
    
           for(let i = 0; i < this.items.length; i++) {
               if(this.items[i] == item){
                   this.items.splice(i, 1);
               }
           }
    
       }

       renameItem(item, title){
            for(let i = 0; i < this.items.length; i++) {
                if(this.items[i] == item){
                    this.items[i].title = title;
                }
            }
        }
 
    setTitle(title){
        this.title = title;
    }

    getElements(){
        return this.items;
    }

       
}