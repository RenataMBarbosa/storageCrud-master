import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

export class Item {
  id: number = null;
  title: string = null;
  value: string = null;
  modified: number = null;

  constructor(values = {}) {
    Object.keys(this)
      .forEach((key) => {
        if (values[key])
          this[key] = values[key];
      })
  }
}

const ITEMS_KEY = 'my-items';
const key = ITEMS_KEY;

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private storage: Storage) { }

  // CREATE
  addItem(item: Item): Promise<any> {
    return this.storage.get(key).then((items: Item[]) => {
      if (items) {
        items.push(item);
        return this.storage.set(key, items);
        
      } else {
        return this.storage.set(key, [item]);
      }
    
    });
    
  }

  // READ
  getItems(): Promise<Item[]> {
    return this.storage.get(key);
  }

  // UPDATE
  updateItem(key: string, item: Item): Promise<any> {
    return this.storage.get(key).then((items: Item[]) => { if (!items || items.length === 0) {return null;}
   let newItems: Item[] = [];for (let i of items) {if (i.id === item.id) { newItems.push(item);} else {newItems.push(i); }
  }console.log(newItems); this.storage.set(key, newItems);});

  }


  // DELETE
  deleteItem(id: number): Promise<Item> {
    return this.storage.get(key).then((items: Item[]) => {
      if (!items || items.length === 0) {
        return null;
      }

      let toKeep: Item[] = [];

      for (let i of items) {
        if (i.id !== id) {
          toKeep.push(i);
        }
      }
      return this.storage.set(key, toKeep);
    });
  }
  
}
export class Itemlist {
  key: string;
  item: Item;

}
