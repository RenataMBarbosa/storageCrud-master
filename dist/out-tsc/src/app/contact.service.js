import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import { DatePipe } from '@angular/common';
var ContactService = /** @class */ (function () {
    function ContactService(storage, datepipe) {
        this.storage = storage;
        this.datepipe = datepipe;
    }
    ContactService.prototype.insert = function (contact) {
        var key = this.datepipe.transform(new Date(), "ddMMyyyyHHmmss");
        return this.save(key, contact);
    };
    ContactService.prototype.update = function (key, contact) {
        return this.save(key, contact);
    };
    ContactService.prototype.save = function (key, contact) {
        return this.storage.set(key, contact);
    };
    ContactService.prototype.remove = function (key) {
        return this.storage.remove(key);
    };
    ContactService.prototype.getAll = function () {
        var contacts = [];
        return this.storage.forEach(function (value, key, iterationNumber) {
            var contact = new ContactList();
            contact.key = key;
            contact.contact = value;
            contacts.push(contact);
        })
            .then(function () {
            return Promise.resolve(contacts);
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
    ContactService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [Storage, DatePipe])
    ], ContactService);
    return ContactService;
}());
export { ContactService };
var Contact = /** @class */ (function () {
    function Contact() {
    }
    return Contact;
}());
export { Contact };
var ContactList = /** @class */ (function () {
    function ContactList() {
    }
    return ContactList;
}());
export { ContactList };
//# sourceMappingURL=contact.service.js.map