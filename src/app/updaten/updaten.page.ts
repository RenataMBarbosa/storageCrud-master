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
   
  constructor(public navCtrl: NavController,private toast : ToastController, private storageServic : StorageService  ){
    
  }

  save( item :Item)
  {
    //item.title = `UPDATED: ${item.title}`;
   this.savetext()
     .then(() => {
      this.showToast('Item atualizado!');
      
    })
    .catch(() => {
      this.showToast('Erro ao salvar!');
    });
    
  }
  private savetext() {
    if (this.key) {
      return this.storageServic.updateItem(this.key,this.model);
    }
  
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
