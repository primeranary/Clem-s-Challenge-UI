webpackJsonp([0],{

/***/ 680:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditsPageModule", function() { return CreditsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__credits__ = __webpack_require__(683);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CreditsPageModule = /** @class */ (function () {
    function CreditsPageModule() {
    }
    CreditsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__credits__["a" /* CreditsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__credits__["a" /* CreditsPage */]),
            ],
        })
    ], CreditsPageModule);
    return CreditsPageModule;
}());

//# sourceMappingURL=credits.module.js.map

/***/ }),

/***/ 683:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreditsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CreditsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreditsPage = /** @class */ (function () {
    function CreditsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CreditsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreditsPage');
    };
    CreditsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-credits',template:/*ion-inline-start:"/Users/clementO/Desktop/practice/src/pages/credits/credits.html"*/'<!--\n  Generated template for the CreditsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>credits</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-content padding="true" style="background: url(img/x6Z1YvI6SzeWp7H0PwCo_Lion_King_zpsa1233220.png) no-repeat center;background-size:cover;" class="has-header">\n    <div class="spacer" style="width: 300px; height: 80px;"></div>\n    <div id="credits-markdown6" style="text-align:center;" class="show-list-numbers-and-dots">\n      <p style="color:#A4FCA8;">--Credits-- </p>\n\n      <p style="color:#A4FCA8;">ClemDog </p>\n\n      <p style="color:#A4FCA8;">Yung Boolean</p>\n\n      <p style="color:#A4FCA8;">Pattern P</p>\n\n      <p style="color:#A4FCA8;">Lil Spring Bean</p>\n\n      <p style="color:#A4FCA8;">Copyright @c primeranary 2018</p>\n    </div>\n  </ion-content>\n</ion-content>\n'/*ion-inline-end:"/Users/clementO/Desktop/practice/src/pages/credits/credits.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], CreditsPage);
    return CreditsPage;
}());

//# sourceMappingURL=credits.js.map

/***/ })

});
//# sourceMappingURL=0.js.map