import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
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
      console.log( this.saveContact);
      return this.storageServic.updateItem ( this.model);
    
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
