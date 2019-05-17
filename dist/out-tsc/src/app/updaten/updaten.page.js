import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController, ToastController, NavParams } from '@ionic/angular';
import { StorageService, Item } from '../services/storage.service';
var UpdatenPage = /** @class */ (function () {
    function UpdatenPage(navParams, navCtrl, toast, storageServic) {
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.toast = toast;
        this.storageServic = storageServic;
        if (this.navParams.data.Item && this.navParams.data.key) {
            this.model = this.navParams.data.Item;
            this.key = this.navParams.data.key;
        }
        else {
            this.model = new Item();
        }
    }
    UpdatenPage.prototype.save = function () {
        var _this = this;
        this.saveContact()
            .then(function () {
            _this.showToast('Item atualizado!');
        })
            .catch(function () {
            _this.showToast('Erro ao salvar!');
        });
    };
    UpdatenPage.prototype.saveContact = function () {
        if (this.key) {
            return this.storageServic.updateItem(this.key, this.model);
        }
        return Promise.reject();
    };
    UpdatenPage.prototype.showToast = function (msg) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var toast;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toast.create({
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
    UpdatenPage.prototype.ngOnInit = function () {
    };
    UpdatenPage = tslib_1.__decorate([
        Component({
            selector: 'app-updaten',
            templateUrl: './updaten.page.html',
            styleUrls: ['./updaten.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NavParams, NavController, ToastController, StorageService])
    ], UpdatenPage);
    return UpdatenPage;
}());
export { UpdatenPage };
//# sourceMappingURL=updaten.page.js.map