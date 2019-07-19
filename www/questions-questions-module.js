(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["questions-questions-module"],{

/***/ "./src/app/questions/questions.module.ts":
/*!***********************************************!*\
  !*** ./src/app/questions/questions.module.ts ***!
  \***********************************************/
/*! exports provided: QuestionsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionsPageModule", function() { return QuestionsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _questions_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./questions.page */ "./src/app/questions/questions.page.ts");







var routes = [
    {
        path: '',
        component: _questions_page__WEBPACK_IMPORTED_MODULE_6__["QuestionsPage"]
    }
];
var QuestionsPageModule = /** @class */ (function () {
    function QuestionsPageModule() {
    }
    QuestionsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_questions_page__WEBPACK_IMPORTED_MODULE_6__["QuestionsPage"]]
        })
    ], QuestionsPageModule);
    return QuestionsPageModule;
}());



/***/ }),

/***/ "./src/app/questions/questions.page.html":
/*!***********************************************!*\
  !*** ./src/app/questions/questions.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n          <ion-back-button></ion-back-button>\n      </ion-buttons>\n      <ion-title>\n        问题列表\n      </ion-title>\n  \n      <ion-buttons slot=\"end\">\n        <ion-button slot=\"icon-only\" color=\"royal\" (click)=\"addClick()\">\n          <ion-icon name=\"add\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </ion-toolbar>\n  \n  </ion-header>\n  \n  <ion-content padding>\n    <ion-list>\n        <ion-item-sliding *ngFor=\"let item of items\">\n            <ion-item button=\"true\" (click)=\"itemSelected(item)\">\n              {{ item }}\n            </ion-item>\n            <ion-item-options side=\"end\">\n              <ion-button (click)=\"remove(item)\" color=\"danger\">移除</ion-button>\n            </ion-item-options>\n          </ion-item-sliding>\n    </ion-list>\n  </ion-content>"

/***/ }),

/***/ "./src/app/questions/questions.page.scss":
/*!***********************************************!*\
  !*** ./src/app/questions/questions.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3F1ZXN0aW9ucy9xdWVzdGlvbnMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/questions/questions.page.ts":
/*!*********************************************!*\
  !*** ./src/app/questions/questions.page.ts ***!
  \*********************************************/
/*! exports provided: QuestionsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionsPage", function() { return QuestionsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _title_title_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../title/title.page */ "./src/app/title/title.page.ts");






var QuestionsPage = /** @class */ (function () {
    function QuestionsPage(http, modal, storage) {
        this.http = http;
        this.modal = modal;
        this.storage = storage;
        this.items = [];
    }
    QuestionsPage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.storage.get('questions')];
                    case 1:
                        _a.items = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    QuestionsPage.prototype.ionViewDidLeave = function () { };
    QuestionsPage.prototype.addClick = function () {
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
                        this.storage.set('questions', this.items);
                        return [2 /*return*/];
                }
            });
        });
    };
    QuestionsPage.prototype.remove = function (item) {
        this.items.splice(this.items.indexOf(item), 1);
        this.storage.set('questions', this.items);
    };
    QuestionsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-questions',
            template: __webpack_require__(/*! ./questions.page.html */ "./src/app/questions/questions.page.html"),
            styles: [__webpack_require__(/*! ./questions.page.scss */ "./src/app/questions/questions.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]])
    ], QuestionsPage);
    return QuestionsPage;
}());



/***/ })

}]);
//# sourceMappingURL=questions-questions-module.js.map