import { Component, OnInit } from '@angular/core';
import { NavController, ToastController, NavParams } from '@ionic/angular';
import { StorageService, Item } from '../services/storage.service';
@Component({
  selector: 'app-updaten',
  templateUrl: './updaten.page.html',
  styleUrls: ['./updaten.page.scss'],
})
export class UpdatenPage implements OnInit {

   model : Item ;
   key: string;
   title: string = '';
  value: string = '';
  constructor(public navCtrl: NavController,private toast : ToastController, private storageServic : StorageService  ){
    
  }

  save( item :Item)
  {
    item.title = `UPDATED: ${item.title}`;
    this.storageServic.updateItem(this.model)
     .then(() => {
      this.showToast('Item atualizado!');
      
    })
    .catch(() => {
      this.showToast('Erro ao salvar!');
    });
    
  }

  
  async showToast(msg) {
    const toast = await this.toast.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }
  
  ngOnInit() {
  }

}
