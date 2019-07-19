(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["courses-courses-module"],{

/***/ "./src/app/courses/courses.module.ts":
/*!*******************************************!*\
  !*** ./src/app/courses/courses.module.ts ***!
  \*******************************************/
/*! exports provided: CoursesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursesPageModule", function() { return CoursesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _courses_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./courses.page */ "./src/app/courses/courses.page.ts");







var routes = [
    { path: '', component: _courses_page__WEBPACK_IMPORTED_MODULE_6__["CoursesPage"] },
];
var CoursesPageModule = /** @class */ (function () {
    function CoursesPageModule() {
    }
    CoursesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_courses_page__WEBPACK_IMPORTED_MODULE_6__["CoursesPage"]]
        })
    ], CoursesPageModule);
    return CoursesPageModule;
}());



/***/ }),

/***/ "./src/app/courses/courses.page.html":
/*!*******************************************!*\
  !*** ./src/app/courses/courses.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      课程列表\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button slot=\"icon-only\" color=\"royal\" (click)=\"addClick()\">\n        <ion-icon name=\"add\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-item-sliding *ngFor=\"let item of items\">\n      <ion-item button=\"true\" (click)=\"itemSelected(item)\">\n        {{ item }}\n      </ion-item>\n      <ion-item-options side=\"end\">\n        <ion-button (click)=\"remove(item)\" color=\"danger\">移除</ion-button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>"

/***/ }),

/***/ "./src/app/courses/courses.page.scss":
/*!*******************************************!*\
  !*** ./src/app/courses/courses.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvdXJzZXMvY291cnNlcy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/courses/courses.page.ts":
/*!*****************************************!*\
  !*** ./src/app/courses/courses.page.ts ***!
  \*****************************************/
/*! exports provided: CoursesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursesPage", function() { return CoursesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _title_title_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../title/title.page */ "./src/app/title/title.page.ts");






var CoursesPage = /** @class */ (function () {
    function CoursesPage(storage, router, modalController) {
        var _this = this;
        this.storage = storage;
        this.router = router;
        this.modalController = modalController;
        this.items = [];
        storage.get('courses').then(function (items) { return _this.items = items == null ? [] : items; });
    }
    CoursesPage.prototype.ngOnInit = function () { };
    CoursesPage.prototype.itemSelected = function (item) {
        console.log("Selected Item", item);
        this.router.navigate(['students'], { queryParams: { course: item } });
    };
    CoursesPage.prototype.addClick = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var m, res;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({ component: _title_title_page__WEBPACK_IMPORTED_MODULE_5__["TitlePage"] })];
                    case 1:
                        m = _a.sent();
                        return [4 /*yield*/, m.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, m.onDidDismiss()];
                    case 3:
                        res = _a.sent();
                        if (!(res.data != null)) return [3 /*break*/, 5];
                        console.log(res.data);
                        this.items.push(res.data);
                        return [4 /*yield*/, this.storage.set('courses', this.items)];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    CoursesPage.prototype.remove = function (item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.items.splice(this.items.indexOf(item), 1);
                        return [4 /*yield*/, this.storage.set('courses', this.items)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CoursesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-courses',
            template: __webpack_require__(/*! ./courses.page.html */ "./src/app/courses/courses.page.html"),
            styles: [__webpack_require__(/*! ./courses.page.scss */ "./src/app/courses/courses.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], CoursesPage);
    return CoursesPage;
}());



/***/ })

}]);
//# sourceMappingURL=courses-courses-module.js.map