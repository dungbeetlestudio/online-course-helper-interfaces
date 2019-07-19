(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["interactions-interactions-module"],{

/***/ "./src/app/interactions/interactions.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/interactions/interactions.module.ts ***!
  \*****************************************************/
/*! exports provided: InteractionsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InteractionsPageModule", function() { return InteractionsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _interactions_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./interactions.page */ "./src/app/interactions/interactions.page.ts");







var routes = [
    {
        path: '',
        component: _interactions_page__WEBPACK_IMPORTED_MODULE_6__["InteractionsPage"]
    }
];
var InteractionsPageModule = /** @class */ (function () {
    function InteractionsPageModule() {
    }
    InteractionsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_interactions_page__WEBPACK_IMPORTED_MODULE_6__["InteractionsPage"]]
        })
    ], InteractionsPageModule);
    return InteractionsPageModule;
}());



/***/ }),

/***/ "./src/app/interactions/interactions.page.html":
/*!*****************************************************!*\
  !*** ./src/app/interactions/interactions.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n          </ion-buttons>\n      <ion-title>\n        互动列表\n      </ion-title>\n  \n      <ion-buttons slot=\"end\">\n        <ion-button slot=\"icon-only\" color=\"royal\" (click)=\"addClick()\">\n          <ion-icon name=\"add\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content padding>\n    <ion-list>\n        <ion-item-sliding *ngFor=\"let item of items\">\n            <ion-item button=\"true\">\n              {{ item }}\n            </ion-item>\n            <ion-item-options side=\"end\">\n              <ion-button (click)=\"remove(item)\" color=\"danger\">移除</ion-button>\n            </ion-item-options>\n          </ion-item-sliding>\n    </ion-list>\n  </ion-content>"

/***/ }),

/***/ "./src/app/interactions/interactions.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/interactions/interactions.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ludGVyYWN0aW9ucy9pbnRlcmFjdGlvbnMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/interactions/interactions.page.ts":
/*!***************************************************!*\
  !*** ./src/app/interactions/interactions.page.ts ***!
  \***************************************************/
/*! exports provided: InteractionsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InteractionsPage", function() { return InteractionsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _title_title_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../title/title.page */ "./src/app/title/title.page.ts");






var InteractionsPage = /** @class */ (function () {
    function InteractionsPage(http, modal, storage) {
        this.http = http;
        this.modal = modal;
        this.storage = storage;
        this.items = [];
    }
    InteractionsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('interactions').then(function (items) { return _this.items = items == null ? [] : items; });
    };
    InteractionsPage.prototype.ionViewDidLeave = function () { };
    InteractionsPage.prototype.addClick = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var m, ret, name;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modal.create({ component: _title_title_page__WEBPACK_IMPORTED_MODULE_5__["TitlePage"] })];
                    case 1:
                        m = _a.sent();
                        return [4 /*yield*/, m.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, m.onDidDismiss()];
                    case 3:
                        ret = _a.sent();
                        name = ret.data;
                        if (name != null)
                            this.items.push(name);
                        this.storage.set('interactions', this.items);
                        return [2 /*return*/];
                }
            });
        });
    };
    InteractionsPage.prototype.remove = function (item) {
        this.items.splice(this.items.indexOf(item), 1);
        this.storage.set('interactions', this.items);
    };
    InteractionsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-interactions',
            template: __webpack_require__(/*! ./interactions.page.html */ "./src/app/interactions/interactions.page.html"),
            styles: [__webpack_require__(/*! ./interactions.page.scss */ "./src/app/interactions/interactions.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]])
    ], InteractionsPage);
    return InteractionsPage;
}());



/***/ })

}]);
//# sourceMappingURL=interactions-interactions-module.js.map