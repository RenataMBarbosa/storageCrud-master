import { Component, ViewChild } from '@angular/core';
import { StorageService, Item, Itemlist } from '../services/storage.service';
import { Platform, ToastController, IonList, NavController, IonItemSliding } from '@ionic/angular';
import { Router}  from '@angular/router';
import { Key } from 'protractor';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
 
  items: Item[] = [];

  title: string = '';
  value: string = '';
  newItem: Item = <Item>{};

  @ViewChild('mylist')mylist: IonList;

  splash = true;
 // secondPage = SecondPage;

  constructor(private router : Router,private storageService: StorageService, private plt: Platform, private toastController: ToastController, public navCtrl : NavController) {
    this.plt.ready().then(() => {
      this.loadItems();
    });
  }
  ionViewDidLoad() {
    setTimeout(() =>this.splash=false, 4000);
 }

  // CREATE
  addItem() {
    this.newItem.modified = Date.now();
    this.newItem.id = Date.now();

    this.storageService.addItem(this.newItem).then(item => {
      this.newItem = <Item>{};
      this.showToast('Item adicionado!')
      this.loadItems(); // Or add it to the array directly
    });
  }

  // READ
  loadItems() {
    this.storageService.getItems().then(items => {
      this.items = items.map((e) => new Item(e));
    });
  }
 

  // UPDATE
  updateItem(item : Itemlist, date: Item) {

    
    //item.title = `Atualizado: ${item.title}`;
    //date.modified = Date.now();
   //var json =  '{" chave": ITEMS_KEY , "itemS" : item }';
   //let obj = JSON.parse(json);
   //navigateForward(url: string | UrlTree | any[], options?: NavigationOptions): Promise<boolean>;
   //this.navCtrl.navigateForward('/updaten');
   this.router.navigate (['/updaten', {Key :item.key, item :item.item }] );
    this.mylist.closeSlidingItems(); 
    this.loadItems();
    //this.storageService.updateItem(item).then(item => {
     
      //this.showToast('Item atualizado!');
      //
     //  // Or update it inside the array directly
//});
    
  }

  // DELETE
  deleteItem(item: Item) {
    this.storageService.deleteItem(item.id).then(item => {
      this.showToast('Item removido!');
      this.mylist.closeSlidingItems(); // Fix or sliding is stuck afterwards
      this.loadItems(); // Or splice it from the array directly
    });
  }

  // Helper
  async showToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

}