import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { UpdatenPage } from './updaten.page';
var routes = [
    {
        path: '',
        component: UpdatenPage
    }
];
var UpdatenPageModule = /** @class */ (function () {
    function UpdatenPageModule() {
    }
    UpdatenPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [UpdatenPage]
        })
    ], UpdatenPageModule);
    return UpdatenPageModule;
}());
export { UpdatenPageModule };
//# sourceMappingURL=updaten.module.js.map