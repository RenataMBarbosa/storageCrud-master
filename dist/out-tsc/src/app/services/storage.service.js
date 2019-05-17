import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
var Item = /** @class */ (function () {
    function Item(values) {
        if (values === void 0) { values = {}; }
        var _this = this;
        this.id = null;
        this.title = null;
        this.value = null;
        this.modified = null;
        Object.keys(this)
            .forEach(function (key) {
            if (values[key])
                _this[key] = values[key];
        });
    }
    return Item;
}());
export { Item };
var ITEMS_KEY = 'my-items';
var key = ITEMS_KEY;
var StorageService = /** @class */ (function () {
    function StorageService(storage) {
        this.storage = storage;
    }
    // CREATE
    StorageService.prototype.addItem = function (item) {
        var _this = this;
        return this.storage.get(key).then(function (items) {
            if (items) {
                items.push(item);
                return _this.storage.set(key, items);
            }
            else {
                return _this.storage.set(key, [item]);
            }
        });
        return this.save(key, item);
    };
    // READ
    StorageService.prototype.getItems = function () {
        return this.storage.get(key);
    };
    // UPDATE
    StorageService.prototype.updateItem = function (key, item) {
        /*return this.storage.get(ITEMS_KEY).then((items: Item[]) => { if (!items || items.length === 0) {return null;}
       let newItems: Item[] = [];for (let i of items) {if (i.id === item.id) { newItems.push(item);} else {newItems.push(i); }
      }console.log(newItems); this.storage.set(ITEMS_KEY, newItems);});*/
        return this.save(key, item);
    };
    StorageService.prototype.save = function (key, item) {
        return this.storage.set(key, item);
    };
    // DELETE
    StorageService.prototype.deleteItem = function (id) {
        var _this = this;
        return this.storage.get(key).then(function (items) {
            if (!items || items.length === 0) {
                return null;
            }
            var toKeep = [];
            for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
                var i = items_1[_i];
                if (i.id !== id) {
                    toKeep.push(i);
                }
            }
            return _this.storage.set(key, toKeep);
        });
    };
    StorageService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [Storage])
    ], StorageService);
    return StorageService;
}());
export { StorageService };
var Itemlist = /** @class */ (function () {
    function Itemlist() {
    }
    return Itemlist;
}());
export { Itemlist };
//# sourceMappingURL=storage.service.js.map