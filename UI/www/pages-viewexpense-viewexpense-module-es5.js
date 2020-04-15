(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-viewexpense-viewexpense-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/viewexpense/viewexpense.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/viewexpense/viewexpense.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"dark\">\n<!--    <ion-title>viewexpense</ion-title>-->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-grid fixed>\n      <ion-item>\n          <ion-row>\n              <ion-col>\n                  <div>\n                      <ion-label>Select Option</ion-label>\n                      <ion-select>\n                          <ion-select-option>Week</ion-select-option>\n                          <ion-select-option>Month</ion-select-option>\n                          <ion-select-option selected>Year</ion-select-option>\n                      </ion-select>\n                  </div>\n              </ion-col>\n               <ion-col>\n                  <div>\n                      <ion-label>Download as CSV</ion-label>\n                      <ion-button color=\"dark\" align-items-end (click)=\"downloadCSV()\">\n                          <ion-icon name=\"md-download\" color=\"light\" align-self-center></ion-icon>\n                      </ion-button>\n                  </div>\n              </ion-col>\n          </ion-row>\n      </ion-item>\n  </ion-grid>\n<!--    <ion-grid fixed>-->\n<!--        <ion-item>-->\n<!--            <ion-button color=\"dark\" align-items-end>-->\n<!--                <ion-icon name=\"md-download\" color=\"light\" align-self-center></ion-icon>-->\n<!--            </ion-button>-->\n<!--        </ion-item>-->\n<!--    </ion-grid>-->\n  <ion-grid fixed>\n    <ion-row>\n      <ion-col\n              size=\"12\"\n              size-xs=\"12\"\n              size-sm=\"6\"\n              size-md=\"4\"\n              size-lg=\"3\"\n              *ngFor=\"let expense of expenses\">\n        <ion-card color=\"light\">\n          <ion-card-header >\n              <ion-button color=\"dark\"  align-items-end (click)=\"editExpense(expense.expenseId)\">\n                  <ion-icon name=\"md-create\" color=\"light\" align-self-center></ion-icon>\n<!--            <ion-label color=\"dark\">Edit Expense</ion-label>-->\n              </ion-button>\n              <ion-button color=\"dark\" align-items-end (click)=\"deleteExpense(expense.expenseId)\">\n                  <ion-icon name=\"md-trash\" color=\"light\" align-self-center></ion-icon>\n                  <!--  <ion-label color=\"dark\">Edit Expense</ion-label>-->\n              </ion-button>\n            <ion-card-content align-items-center>\n                <div class=\"row\" ng-repeat=\"data in ctrl.data\">\n                    <div class=\"col\">Name: {{expense.itemName}}</div>\n                    <div class=\"col\">Description: {{expense.itemDescription}}</div>\n                    <div class=\"col\">Location: {{expense.location}}</div>\n                    <div class=\"col\">Amount: {{expense.amount}}</div>\n                </div>\n<!--             {{expense.itemName}}-->\n<!--             {{expense.itemDescription}}-->\n<!--             {{expense.location}}-->\n<!--             {{expense.amount}}-->\n            </ion-card-content>\n          </ion-card-header>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/viewexpense/viewexpense.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/viewexpense/viewexpense.module.ts ***!
  \*********************************************************/
/*! exports provided: ViewexpensePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewexpensePageModule", function() { return ViewexpensePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_papaparse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-papaparse */ "./node_modules/ngx-papaparse/fesm5/ngx-papaparse.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _viewexpense_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./viewexpense.page */ "./src/app/pages/viewexpense/viewexpense.page.ts");








var routes = [
    {
        path: '',
        component: _viewexpense_page__WEBPACK_IMPORTED_MODULE_7__["ViewexpensePage"]
    }
];
var ViewexpensePageModule = /** @class */ (function () {
    function ViewexpensePageModule() {
    }
    ViewexpensePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                ngx_papaparse__WEBPACK_IMPORTED_MODULE_5__["PapaParseModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_viewexpense_page__WEBPACK_IMPORTED_MODULE_7__["ViewexpensePage"]]
        })
    ], ViewexpensePageModule);
    return ViewexpensePageModule;
}());



/***/ }),

/***/ "./src/app/pages/viewexpense/viewexpense.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/viewexpense/viewexpense.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ZpZXdleHBlbnNlL3ZpZXdleHBlbnNlLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/viewexpense/viewexpense.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/viewexpense/viewexpense.page.ts ***!
  \*******************************************************/
/*! exports provided: ViewexpensePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewexpensePage", function() { return ViewexpensePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var ngx_papaparse__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-papaparse */ "./node_modules/ngx-papaparse/fesm5/ngx-papaparse.js");







var ViewexpensePage = /** @class */ (function () {
    function ViewexpensePage(router, authService, toastService, papa, navCtrl) {
        this.router = router;
        this.authService = authService;
        this.toastService = toastService;
        this.papa = papa;
        this.navCtrl = navCtrl;
        this.userId = 1;
    }
    ViewexpensePage.prototype.ionViewDidEnter = function () {
        this.getExpenses(this.userId);
    };
    ViewexpensePage.prototype.ngOnInit = function () {
        this.getExpenses(this.userId);
    };
    ViewexpensePage.prototype.deleteExpense = function (expenseId) {
        var _this = this;
        this.authService.deleteExpense(expenseId).subscribe(function (response) {
            if (response) {
                _this.getExpenses(_this.userId);
            }
            else {
                alert('Expense deletion Error!!!');
            }
        });
    };
    ViewexpensePage.prototype.editExpense = function (expenseId) {
        var navigationExtras = {
            queryParams: {
                id: expenseId
            }
        };
        this.router.navigate(['/home/addexpense'], navigationExtras);
    };
    ViewexpensePage.prototype.getExpenses = function (userId) {
        var _this = this;
        this.authService.getExpenses(this.userId).subscribe(function (response) {
            if (response) {
                _this.expenses = response.expenses;
                console.log(_this.expenses);
            }
            else {
                _this.toastService.presentToast('no Data');
            }
        }, function (error) {
            _this.toastService.presentToast('Network connection Error');
        });
    };
    ViewexpensePage.prototype.downloadCSV = function () {
        var CSV = this.papa.unparse(this.expenses);
        var blob = new Blob([CSV]);
        var a = window.document.createElement('a');
        a.href = window.URL.createObjectURL(blob);
        a.download = 'expenses.csv';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };
    ViewexpensePage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"] },
        { type: ngx_papaparse__WEBPACK_IMPORTED_MODULE_6__["Papa"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] }
    ]; };
    ViewexpensePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-viewexpense',
            template: __webpack_require__(/*! raw-loader!./viewexpense.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/viewexpense/viewexpense.page.html"),
            styles: [__webpack_require__(/*! ./viewexpense.page.scss */ "./src/app/pages/viewexpense/viewexpense.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _services_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"],
            ngx_papaparse__WEBPACK_IMPORTED_MODULE_6__["Papa"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]])
    ], ViewexpensePage);
    return ViewexpensePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-viewexpense-viewexpense-module-es5.js.map