(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-toolbar {\r\n    color: rgba(255, 255, 255, 1);\r\n    background-color: #0066a1d7;\r\n    position: fixed;\r\n    z-index: 2;\r\n}\r\n\r\n.logo {\r\n  display: flex;\r\n}\r\n\r\n.logo > img {\r\n  height: 50px;\r\n}\r\n\r\n.icon {\r\n    padding: 0 10px;\r\n}\r\n\r\n.spacer {\r\n    flex: 1 1 auto;\r\n}\r\n\r\n/****** HOME *******/\r\n\r\n.about-us {\r\n    height: 847px;\r\n    background-image:url('city2.png');\r\n    background-position: center;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n.about-us-member{\r\n    padding: 20px 20px 20px;\r\n    background-color: #f5f5f5ad;\r\n}\r\n\r\n.about-us-image{\r\n    background-image: url('about-us.png');\r\n    background-size: cover;\r\n    -ms-grid-row-align: center;\r\n        align-self: center;\r\n    margin: 40px;\r\n    width:23rem;\r\n    height:15rem;\r\n}\r\n\r\n.about-us-name{\r\n    font-family: 'Stag Book';\r\n    font-weight: bold;\r\n    overflow: hidden;\r\n    white-space: nowrap;\r\n    font-size: 2rem;\r\n    margin: 0 auto;\r\n    text-align: center;\r\n    letter-spacing: .15em;\r\n    -webkit-animation: \r\n        typing 5.5s steps(400, end),\r\n        blink-caret 2s step-end infinite;\r\n            animation: \r\n        typing 5.5s steps(400, end),\r\n        blink-caret 2s step-end infinite;\r\n}\r\n\r\n/* The typing effect */\r\n\r\n@-webkit-keyframes typing {\r\n    from { width: 0 }\r\n    to { width: 100% }\r\n  }\r\n\r\n@keyframes typing {\r\n    from { width: 0 }\r\n    to { width: 100% }\r\n  }\r\n\r\n/* The typewriter cursor effect */\r\n\r\n@-webkit-keyframes blink-caret {\r\n    from, to { border-color: transparent }\r\n    50% { border-color: orange; }\r\n  }\r\n\r\n@keyframes blink-caret {\r\n    from, to { border-color: transparent }\r\n    50% { border-color: orange; }\r\n  }\r\n\r\n.team {\r\n    padding: 30px 20px 20px;\r\n}\r\n\r\n@-webkit-keyframes inside {\r\n    from {\r\n        opacity:0;\r\n        -webkit-transform:translateY(-100%);\r\n                transform:translateY(-100%);\r\n        \r\n    }\r\n    75%  {opacity:0.1;}\r\n    to {\r\n        opacity:1;\r\n        -webkit-transform:translateY(0%);\r\n                transform:translateY(0%);\r\n    }\r\n}\r\n\r\n@keyframes inside {\r\n    from {\r\n        opacity:0;\r\n        -webkit-transform:translateY(-100%);\r\n                transform:translateY(-100%);\r\n        \r\n    }\r\n    75%  {opacity:0.1;}\r\n    to {\r\n        opacity:1;\r\n        -webkit-transform:translateY(0%);\r\n                transform:translateY(0%);\r\n    }\r\n}\r\n\r\n.member.in-viewport {\r\n    -webkit-animation: inside 400ms ease-out 1;\r\n            animation: inside 400ms ease-out 1 \r\n}\r\n\r\n.member {\r\n    padding: 10px 20px;\r\n}\r\n\r\n.member .avatar {\r\n    background-image: url('https://www.w3schools.com/w3css/img_avatar3.png');\r\n    background-size: cover;\r\n    -ms-grid-row-align: center;\r\n        align-self: center;\r\n    border-radius: 50%;\r\n    width:10rem;\r\n    height:10rem;\r\n}\r\n\r\n.name {\r\n    font-family: 'Stag Book';\r\n    font-weight: bold;\r\n    font-size: 2rem;\r\n    margin: 10px;\r\n    text-align: center;\r\n}\r\n\r\n.job-position{\r\n    font-size: 1.3rem;\r\n    font-weight: bold;\r\n    margin: 0 0 10px 0;\r\n}\r\n\r\n.description{\r\n    font-size: 1rem;\r\n    font-weight: bold;\r\n    text-align: justify;\r\n}\r\n\r\n.icon-list{\r\n    margin-top:10px;\r\n}\r\n\r\n.mat-button{\r\n    padding: 0px;\r\n    min-width: 0px;\r\n}\r\n\r\n@media (max-width:599px){\r\n    .logo > img {\r\n        height: 40px;\r\n      }\r\n}\r\n\r\na {\r\n  color: white;\r\n  padding: 0px 20px;\r\n  text-decoration: none;\r\n  text-transform: uppercase;\r\n}\r\n\r\na:hover {\r\n  background-color: #003f63d7;\r\n}\r\n\r\na:active {\r\n  background-color: #003f63d7;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"home\">\r\n    <mat-toolbar color=\"primary\">\r\n        <mat-toolbar-row>\r\n            <span class=\"logo\">\r\n                <img src=\"assets/icon-body2.png\" />\r\n            </span>\r\n            <span class=\"spacer\"></span>\r\n            <!-- <span>WORLDLINE SERVER TEAM</span> -->\r\n            <span class=\"spacer\"></span>\r\n            <!-- <mat-icon class=\"icon\">business</mat-icon>\r\n            <mat-icon class=\"icon\">clear_all</mat-icon> -->\r\n            <div class=\"references\" fxLayout=\"row wrap\" fxLayoutAlign=\"center center\" fxShow=\"false\" fxShow.gt-sm=\"true\">\r\n                <a href=\"#about-us\" fxFlex=\"100%\" fxFlex.gt-sm=\"25%\" fxFlex.gt-xs=\"70%\" fxLayoutAlign=\"center center\">About Us</a>\r\n                <a href=\"#team\" fxFlex=\"100%\" fxFlex.gt-sm=\"25%\" fxFlex.gt-xs=\"70%\" fxLayoutAlign=\"center center\">Our team</a>\r\n                <a href=\"#tecnologies\" fxFlex=\"100%\" fxFlex.gt-sm=\"25%\" fxFlex.gt-xs=\"70%\" fxLayoutAlign=\"center center\">Tecnologies</a>\r\n                <a href=\"#contact\" fxFlex=\"100%\" fxFlex.gt-sm=\"25%\" fxFlex.gt-xs=\"70%\" fxLayoutAlign=\"center center\">Contact</a>\r\n            </div>\r\n            <button mat-button [matMenuTriggerFor]=\"menu\" fxShow=\"true\" fxShow.gt-sm=\"false\">\r\n                <mat-icon class=\"icon\">clear_all</mat-icon>\r\n            </button>\r\n            <mat-menu #menu=\"matMenu\">\r\n                <button mat-menu-item><a href=\"#about-us\">About us</a></button>\r\n                <button mat-menu-item><a href=\"#team\">Team</a></button>\r\n                <button mat-menu-item><a href=\"#tecnologies\">Tecnologies</a></button>\r\n                <button mat-menu-item><a href=\"#contact\">Contact</a></button>\r\n            </mat-menu>\r\n        </mat-toolbar-row>\r\n    </mat-toolbar>\r\n    <div id=\"about-us\" class=\"about-us\" fxLayout=\"row wrap\" fxLayout.xs=\"column\" fxLayoutAlign=\"center center\">\r\n        <div class=\"about-us-member\" fxFlex=\"100%\" fxFlex.gt-sm=\"90%\" fxFlex.gt-xs=\"80%\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n            <div class=\"about-us-name\">what we do / about us</div>\r\n            <div class=\"about-us-image\"></div>\r\n            <p class=\"description\"> Vivamus sed sodales sapien, in lacinia elit. Duis tincidunt eros vel ex cursus, non molestie ex varius. Duis\r\n                imperdiet odio urna, vitae dictum lorem tristique non. Pellentesque habitant morbi tristique senectus et\r\n                netus et malesuada fames ac turpis egestas. Cras faucibus tempor metus sit amet tristique. Sed aliquet ut\r\n                dui quis pharetra. Donec blandit laoreet gravida. Aliquam a suscipit enim. Nam vehicula sed erat sit amet\r\n                auctor. In at rhoncus enim. Donec lacinia vestibulum orci in egestas. Phasellus id lacinia elit. Vivamus\r\n                eleifend faucibus interdum. Donec viverra elementum odio, sed rutrum ante aliquam at. Ut dolor diam, semper\r\n                nec ligula nec, iaculis finibus dolor. Mauris placerat ut felis vel pretium. Aenean tincidunt feugiat ex,\r\n                ac iaculis ipsum ullamcorper a. Duis a lacus non dolor fermentum consectetur quis vel lorem. Fusce fringilla\r\n                neque sit amet auctor porta. Duis eleifend pretium velit, sit amet posuere dolor interdum vitae. Donec aliquet\r\n                arcu at leo rhoncus dignissim. Proin sed risus egestas, venenatis libero ut, elementum est. Vivamus feugiat\r\n                blandit tortor, porta efficitur mauris maximus semper. Nunc interdum nisl augue, quis tincidunt sem ultrices\r\n                fermentum.\r\n            </p>\r\n        </div>\r\n    </div>\r\n    <div id=\"team\" class=\"team\" fxLayout=\"row wrap\" fxLayout.xs=\"column\">\r\n        <div class=\"member\" fxFlex=\"100%\" fxFlex.gt-sm=\"25%\" fxFlex.gt-xs=\"33%\" fxLayout=\"column\" fxLayoutAlign=\"center center\" inViewport\r\n            [debounce]=\"0\">\r\n            <div class=\"avatar\"></div>\r\n            <div class=\"name\">Name 1</div>\r\n            <div class=\"job-position\">JOB_POSITION</div>\r\n            <p class=\"description\"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ligula risus, ornare non gravida eget, congue\r\n                nec mi. Aliquam sed odio orci. Mauris sit amet diam finibus, porttitor nunc quis, aliquet nisl. Sed sagittis\r\n                hendrerit rhoncus. </p>\r\n            <div class=\"icon-list\">\r\n                <button mat-button>\r\n                    <mat-icon class=\"icon\">clear_all</mat-icon>\r\n                </button>\r\n                <button mat-button>\r\n                    <mat-icon class=\"icon\">clear_all</mat-icon>\r\n                </button>\r\n                <button mat-button>\r\n                    <mat-icon class=\"icon\">clear_all</mat-icon>\r\n                </button>\r\n                <button mat-button>\r\n                    <mat-icon class=\"icon\">clear_all</mat-icon>\r\n                </button>\r\n            </div>\r\n        </div>\r\n        <div class=\"member\" fxFlex=\"100%\" fxFlex.gt-sm=\"25%\" fxFlex.gt-xs=\"33%\" fxLayout=\"column\" fxLayoutAlign=\"center center\" inViewport\r\n            [debounce]=\"0\">\r\n            <div class=\"avatar\"></div>\r\n            <div class=\"name\">Name 2</div>\r\n            <div class=\"job-position\">JOB_POSITION</div>\r\n            <p class=\"description\"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ligula risus, ornare non gravida eget, congue\r\n                nec mi. Aliquam sed odio orci. Mauris sit amet diam finibus, porttitor nunc quis, aliquet nisl. Sed sagittis\r\n                hendrerit rhoncus. </p>\r\n            <div class=\"icon-list\">\r\n                <button mat-button>\r\n                    <mat-icon class=\"icon\">clear_all</mat-icon>\r\n                </button>\r\n                <button mat-button>\r\n                    <mat-icon class=\"icon\">clear_all</mat-icon>\r\n                </button>\r\n                <button mat-button>\r\n                    <mat-icon class=\"icon\">clear_all</mat-icon>\r\n                </button>\r\n                <button mat-button>\r\n                    <mat-icon class=\"icon\">clear_all</mat-icon>\r\n                </button>\r\n            </div>\r\n        </div>\r\n        <div class=\"member\" fxFlex=\"100%\" fxFlex.gt-sm=\"25%\" fxFlex.gt-xs=\"33%\" fxLayout=\"column\" fxLayoutAlign=\"center center\" inViewport\r\n            [debounce]=\"0\">\r\n            <div mat-card-avatar class=\"avatar\"></div>\r\n            <div class=\"name\">Name 3</div>\r\n            <div class=\"job-position\">JOB_POSITION</div>\r\n            <p class=\"description\"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ligula risus, ornare non gravida eget, congue\r\n                nec mi. Aliquam sed odio orci. Mauris sit amet diam finibus, porttitor nunc quis, aliquet nisl. Sed sagittis\r\n                hendrerit rhoncus. </p>\r\n            <div class=\"icon-list\">\r\n                <button mat-button>\r\n                    <mat-icon class=\"icon\">clear_all</mat-icon>\r\n                </button>\r\n                <button mat-button>\r\n                    <mat-icon class=\"icon\">clear_all</mat-icon>\r\n                </button>\r\n                <button mat-button>\r\n                    <mat-icon class=\"icon\">clear_all</mat-icon>\r\n                </button>\r\n                <button mat-button>\r\n                    <mat-icon class=\"icon\">clear_all</mat-icon>\r\n                </button>\r\n            </div>\r\n        </div>\r\n        <div class=\"member\" fxFlex=\"100%\" fxFlex.gt-sm=\"25%\" fxFlex.gt-xs=\"33%\" fxLayout=\"column\" fxLayoutAlign=\"center center\" inViewport\r\n            [debounce]=\"0\">\r\n            <div class=\"avatar\"></div>\r\n            <div class=\"name\">Name 4</div>\r\n            <div class=\"job-position\">JOB_POSITION</div>\r\n            <p class=\"description\"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ligula risus, ornare non gravida eget, congue\r\n                nec mi. Aliquam sed odio orci. Mauris sit amet diam finibus, porttitor nunc quis, aliquet nisl. Sed sagittis\r\n                hendrerit rhoncus. </p>\r\n            <div class=\"icon-list\">\r\n                <button mat-button>\r\n                    <mat-icon class=\"icon\">clear_all</mat-icon>\r\n                </button>\r\n                <button mat-button>\r\n                    <mat-icon class=\"icon\">clear_all</mat-icon>\r\n                </button>\r\n                <button mat-button>\r\n                    <mat-icon class=\"icon\">clear_all</mat-icon>\r\n                </button>\r\n                <button mat-button>\r\n                    <mat-icon class=\"icon\">clear_all</mat-icon>\r\n                </button>\r\n            </div>\r\n        </div>\r\n        <div class=\"member\" fxFlex=\"100%\" fxFlex.gt-sm=\"25%\" fxFlex.gt-xs=\"33%\" fxLayout=\"column\" fxLayoutAlign=\"center center\" inViewport\r\n            [debounce]=\"0\">\r\n            <div class=\"avatar\"></div>\r\n            <div class=\"name\">Name 5</div>\r\n            <div class=\"job-position\">JOB_POSITION</div>\r\n            <p class=\"description\"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ligula risus, ornare non gravida eget, congue\r\n                nec mi. Aliquam sed odio orci. Mauris sit amet diam finibus, porttitor nunc quis, aliquet nisl. Sed sagittis\r\n                hendrerit rhoncus. </p>\r\n            <div class=\"icon-list\">\r\n                <button mat-button>\r\n                    <mat-icon class=\"icon\">clear_all</mat-icon>\r\n                </button>\r\n                <button mat-button>\r\n                    <mat-icon class=\"icon\">clear_all</mat-icon>\r\n                </button>\r\n                <button mat-button>\r\n                    <mat-icon class=\"icon\">clear_all</mat-icon>\r\n                </button>\r\n                <button mat-button>\r\n                    <mat-icon class=\"icon\">clear_all</mat-icon>\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'frontend-backend-server-team';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _modules_angularMaterial_angularMaterial_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/angularMaterial/angularMaterial.module */ "./src/app/modules/angularMaterial/angularMaterial.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var angular_inviewport__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-inviewport */ "./node_modules/angular-inviewport/angular-inviewport.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _modules_angularMaterial_angularMaterial_module__WEBPACK_IMPORTED_MODULE_3__["angularMaterialModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
                angular_inviewport__WEBPACK_IMPORTED_MODULE_5__["InViewportModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/modules/angularMaterial/angularMaterial.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/angularMaterial/angularMaterial.module.ts ***!
  \*******************************************************************/
/*! exports provided: angularMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "angularMaterialModule", function() { return angularMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var angularMaterialModule = /** @class */ (function () {
    function angularMaterialModule() {
    }
    angularMaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSlideToggleModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSlideToggleModule"]
            ]
        })
    ], angularMaterialModule);
    return angularMaterialModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\dev\frontend-backend-server-team\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map