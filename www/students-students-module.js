(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["students-students-module"],{

/***/ "./src/app/api-def.ts":
/*!****************************!*\
  !*** ./src/app/api-def.ts ***!
  \****************************/
/*! exports provided: API */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API", function() { return API; });
var API = {
    putCourseTask: 'http://www.dungbeetles.xyz:8000/online-course-helper/putCourseTask',
    getStudentStatus: 'http://www.dungbeetles.xyz:8000/online-course-helper/getStudentStatus',
};


/***/ }),

/***/ "./src/app/students/students.module.ts":
/*!*********************************************!*\
  !*** ./src/app/students/students.module.ts ***!
  \*********************************************/
/*! exports provided: StudentsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentsPageModule", function() { return StudentsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _students_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./students.page */ "./src/app/students/students.page.ts");







var routes = [
    {
        path: '',
        component: _students_page__WEBPACK_IMPORTED_MODULE_6__["StudentsPage"]
    }
];
var StudentsPageModule = /** @class */ (function () {
    function StudentsPageModule() {
    }
    StudentsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_students_page__WEBPACK_IMPORTED_MODULE_6__["StudentsPage"]]
        })
    ], StudentsPageModule);
    return StudentsPageModule;
}());



/***/ }),

/***/ "./src/app/students/students.page.html":
/*!*********************************************!*\
  !*** ./src/app/students/students.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      学生控制\n    </ion-title>\n    <ion-buttons slot=\"end\">\n        <ion-button slot=\"icon-only\" color=\"royal\" (click)=\"addClick()\">\n          <ion-icon name=\"add\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <div style=\"display: flex\">\n        <h5>课程：{{course}}</h5>\n  </div>\n  <div style=\"display: flex;\">\n    <h5>当前可听课学生：{{numberOfEnteredRobots}}</h5>\n    <div style=\"flex: 1;\"></div>\n    <div style=\"flex: 1;\"></div>\n    <ion-button (click)=\"enterClick()\">进入教室</ion-button>\n  </div>\n\n  <div style=\"display: flex;\">\n    <ion-button (click)=\"interactionsClick()\">学生互动</ion-button>\n    <ion-button (click)=\"questionsClick()\">学生提问</ion-button>\n    <div style=\"flex: 1;\"></div>\n    <ion-button color=\"danger\" (click)=\"leaveClick()\">学生离开</ion-button>\n  </div>\n  <ion-list>\n      <ion-item-sliding *ngFor=\"let item of items\">\n          <ion-item>\n            <h5><ion-text color=\"primary\">{{ item.status }}:</ion-text>{{ item.text }}</h5>\n          </ion-item>\n          <ion-item-options side=\"end\">\n            <ion-button (click)=\"removeClick(item.text)\" color=\"danger\">移除</ion-button>\n          </ion-item-options>\n        </ion-item-sliding>\n  </ion-list>\n</ion-content>"

/***/ }),

/***/ "./src/app/students/students.page.scss":
/*!*********************************************!*\
  !*** ./src/app/students/students.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0dWRlbnRzL3N0dWRlbnRzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/students/students.page.ts":
/*!*******************************************!*\
  !*** ./src/app/students/students.page.ts ***!
  \*******************************************/
/*! exports provided: StudentsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentsPage", function() { return StudentsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _title_title_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../title/title.page */ "./src/app/title/title.page.ts");
/* harmony import */ var _api_def__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../api-def */ "./src/app/api-def.ts");








var StudentsPage = /** @class */ (function () {
    function StudentsPage(storage, router, http, modalController, activeRoute) {
        var _this = this;
        this.storage = storage;
        this.router = router;
        this.http = http;
        this.modalController = modalController;
        this.activeRoute = activeRoute;
        this.students = [];
        this.items = [];
        this.buttonEnteredDisabled = false;
        this.buttonLeaveDisabled = true;
        this.numberOfEnteredRobots = 0;
        this.updateStatus = function () {
            _this.items.splice(_this.students.length - 1, _this.items.length - _this.students.length);
            var _loop_1 = function (i) {
                _this.http.get(_api_def__WEBPACK_IMPORTED_MODULE_7__["API"].getStudentStatus, { params: { account: _this.students[i].split(':')[0] } }).subscribe(function (res) {
                    var item = { status: res['err'] ? '接口错误' : res['ret'] ? res['ret'] : '学生离线', text: _this.students[i] };
                    if (i < _this.items.length)
                        _this.items[i] = item;
                    else
                        _this.items.push(item);
                }, function (err) {
                    var item = { status: '网络错误', text: _this.students[i] };
                    if (i < _this.items.length)
                        _this.items[i] = item;
                    else
                        _this.items.push(item);
                });
            };
            for (var i = 0; i < _this.students.length; i++) {
                _loop_1(i);
            }
            if (_this.timer)
                setTimeout(_this.updateStatus, 10000);
        };
        this.timer = null;
        activeRoute.queryParams.subscribe(function (params) {
            _this.course = params.course;
        });
    }
    StudentsPage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, _i, _b, s;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.storage.get('students')];
                    case 1:
                        _a.students = _c.sent();
                        this.students ? this.students : [];
                        for (_i = 0, _b = this.students; _i < _b.length; _i++) {
                            s = _b[_i];
                            this.items.push({ status: '学生离线', text: s });
                        }
                        this.numberOfEnteredRobots = this.students.length;
                        return [2 /*return*/];
                }
            });
        });
    };
    StudentsPage.prototype.enterClick = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var accounts, _i, _a, s, _b, _c, _d, _e;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_f) {
                switch (_f.label) {
                    case 0:
                        clearTimeout(this.timer);
                        accounts = [];
                        for (_i = 0, _a = this.students; _i < _a.length; _i++) {
                            s = _a[_i];
                            accounts.push(s.split(':'));
                        }
                        _c = (_b = this.http).post;
                        _d = [_api_def__WEBPACK_IMPORTED_MODULE_7__["API"].putCourseTask];
                        _e = {
                            course: this.course,
                            accounts: accounts
                        };
                        return [4 /*yield*/, this.storage.get('interactions')];
                    case 1:
                        _e.interactions = _f.sent();
                        return [4 /*yield*/, this.storage.get('questions')];
                    case 2:
                        _c.apply(_b, _d.concat([(_e.questions = _f.sent(),
                                _e), { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }])).subscribe(function (res) {
                            if (!res['ret'])
                                return;
                            alert('命令已发送！');
                            _this.timer = setTimeout(_this.updateStatus);
                        }, function (err) {
                            console.error(err);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    StudentsPage.prototype.leaveClick = function () {
        clearTimeout(this.timer);
        this.timer = null;
    };
    StudentsPage.prototype.addClick = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var m, ret, value;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({ component: _title_title_page__WEBPACK_IMPORTED_MODULE_6__["TitlePage"] })];
                    case 1:
                        m = _a.sent();
                        return [4 /*yield*/, m.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, m.onDidDismiss()];
                    case 3:
                        ret = _a.sent();
                        value = ret.data;
                        if (!(value != null)) return [3 /*break*/, 5];
                        this.items.push({ status: '学生离线', text: value });
                        this.students.push(value);
                        return [4 /*yield*/, this.storage.set('students', this.students)];
                    case 4:
                        _a.sent();
                        this.numberOfEnteredRobots = this.students.length;
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    StudentsPage.prototype.removeClick = function (item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var i;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        i = this.students.indexOf(item);
                        this.students.splice(i, 1);
                        return [4 /*yield*/, this.storage.set('students', this.students)];
                    case 1:
                        _a.sent();
                        this.items.splice(i, 1);
                        this.numberOfEnteredRobots = this.students.length;
                        return [2 /*return*/];
                }
            });
        });
    };
    StudentsPage.prototype.interactionsClick = function () {
        this.router.navigate(['/interactions']);
    };
    StudentsPage.prototype.questionsClick = function () {
        this.router.navigate(['/questions']);
    };
    StudentsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-students',
            template: __webpack_require__(/*! ./students.page.html */ "./src/app/students/students.page.html"),
            styles: [__webpack_require__(/*! ./students.page.scss */ "./src/app/students/students.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], StudentsPage);
    return StudentsPage;
}());



/***/ })

}]);
//# sourceMappingURL=students-students-module.js.map