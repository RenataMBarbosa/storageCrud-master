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
  constructor(public navParams: NavParams,public navCtrl: NavController,private toast : ToastController, private storageServic : StorageService  ){
    if (this.navParams.data.Item && this.navParams.data.key) {
      this.model = this.navParams.data.Item;
      this.key =  this.navParams.data.key;
    } else {
      this.model = new Item();
    }
  }

  save()
  {
     this.saveContact()
     .then(() => {
      this.showToast('Item atualizado!');
      
    })
    .catch(() => {
      this.showToast('Erro ao salvar!');
    });
    
  }

  private saveContact() {
    if (this.key) {
      
        return this.storageServic.updateItem(this.key, this.model);
    
    }
    return Promise.reject();
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
