import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { StorageService, Item } from '../services/storage.service';
import { Platform, ToastController, IonList, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
var HomePage = /** @class */ (function () {
    function HomePage(router, storageService, plt, toastController, navCtrl) {
        var _this = this;
        this.router = router;
        this.storageService = storageService;
        this.plt = plt;
        this.toastController = toastController;
        this.navCtrl = navCtrl;
        this.items = [];
        this.title = '';
        this.value = '';
        this.newItem = {};
        this.plt.ready().then(function () {
            _this.loadItems();
        });
    }
    // CREATE
    HomePage.prototype.addItem = function () {
        var _this = this;
        this.newItem.modified = Date.now();
        this.newItem.id = Date.now();
        this.storageService.addItem(this.newItem).then(function (item) {
            _this.newItem = {};
            _this.showToast('Item adicionado!');
            _this.loadItems(); // Or add it to the array directly
        });
    };
    // READ
    HomePage.prototype.loadItems = function () {
        var _this = this;
        this.storageService.getItems().then(function (items) {
            _this.items = items.map(function (e) { return new Item(e); });
        });
    };
    // UPDATE
    HomePage.prototype.updateItem = function (item, date) {
        //item.title = `Atualizado: ${item.title}`;
        //date.modified = Date.now();
        //var json =  '{" chave": ITEMS_KEY , "itemS" : item }';
        //let obj = JSON.parse(json);
        //navigateForward(url: string | UrlTree | any[], options?: NavigationOptions): Promise<boolean>;
        //this.navCtrl.navigateForward('/updaten');
        this.router.navigate(['/updaten', { Key: item.key, item: item.item }]);
        this.mylist.closeSlidingItems();
        this.loadItems();
        //this.storageService.updateItem(item).then(item => {
        //this.showToast('Item atualizado!');
        //
        //  // Or update it inside the array directly
        //});
    };
    // DELETE
    HomePage.prototype.deleteItem = function (item) {
        var _this = this;
        this.storageService.deleteItem(item.id).then(function (item) {
            _this.showToast('Item removido!');
            _this.mylist.closeSlidingItems(); // Fix or sliding is stuck afterwards
            _this.loadItems(); // Or splice it from the array directly
        });
    };
    // Helper
    HomePage.prototype.showToast = function (msg) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var toast;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: msg,
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    tslib_1.__decorate([
        ViewChild('mylist'),
        tslib_1.__metadata("design:type", IonList)
    ], HomePage.prototype, "mylist", void 0);
    HomePage = tslib_1.__decorate([
        Component({
            selector: 'app-home',
            templateUrl: 'home.page.html',
            styleUrls: ['home.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router, StorageService, Platform, ToastController, NavController])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.page.js.map