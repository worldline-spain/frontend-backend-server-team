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

/***/ "./src/angularMaterial/angularMaterial.module.ts":
/*!*******************************************************!*\
  !*** ./src/angularMaterial/angularMaterial.module.ts ***!
  \*******************************************************/
/*! exports provided: AngularMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularMaterialModule", function() { return AngularMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AngularMaterialModule = /** @class */ (function () {
    function AngularMaterialModule() {
    }
    AngularMaterialModule = __decorate([
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
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTooltipModule"]
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
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSlideToggleModule"]
            ]
        })
    ], AngularMaterialModule);
    return AngularMaterialModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <mcc-header (section)=\"triggerScrollTo($event)\"></mcc-header>\n  <mcc-mobile-competence id=\"mobile-competence\"></mcc-mobile-competence>\n  <mcc-about-us id=\"about-us\"></mcc-about-us>\n  <div class=\"divider-fliped\"></div>\n  <mcc-team-list id=\"team\"></mcc-team-list>\n  <div class=\"divider\"></div>\n  <mcc-technologies id=\"technologies\"></mcc-technologies>\n  <div class=\"divider-fliped\"></div>\n  <mcc-footer></mcc-footer>\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@-webkit-keyframes inside {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(-100%);\n            transform: translateY(-100%); }\n  75% {\n    opacity: 0.1; }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0%);\n            transform: translateY(0%); } }\n\n@keyframes inside {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(-100%);\n            transform: translateY(-100%); }\n  75% {\n    opacity: 0.1; }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0%);\n            transform: translateY(0%); } }\n\n/****************** DIVIDERS *******************/\n\n.divider-fliped {\n  background-image: url(\"data:image/png;base64,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\");\n  width: 100%;\n  height: 200px;\n  -webkit-transform: scaleY(-1);\n          transform: scaleY(-1); }\n\n.divider {\n  background-image: url(\"data:image/png;base64,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\");\n  width: 100%;\n  height: 200px; }\n\n/********* CONTACT SECTION *********/\n\nform {\n  padding: 100px; }\n\nmat-form-field input, mat-form-field textarea {\n  color: #0066a1;\n  font-size: 20px; }\n"

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
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ "./node_modules/@nicky-lenaers/ngx-scroll-to/fesm5/nicky-lenaers-ngx-scroll-to.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(scrollToService) {
        this.scrollToService = scrollToService;
    }
    AppComponent.prototype.triggerScrollTo = function (target) {
        var config;
        if (target === 'mobile-competence') {
            config = { target: target };
        }
        else {
            config = { target: target, offset: -56 };
        }
        this.scrollToService.scrollTo(config);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mcc-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_1__["ScrollToService"]])
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_header_component_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/header-component/header.component */ "./src/components/header-component/header.component.ts");
/* harmony import */ var _components_mobile_competence_component_mobile_cometence_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/mobile-competence-component/mobile-cometence.component */ "./src/components/mobile-competence-component/mobile-cometence.component.ts");
/* harmony import */ var _components_about_us_component_about_us_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/about-us-component/about-us.component */ "./src/components/about-us-component/about-us.component.ts");
/* harmony import */ var _components_team_list_component_team_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/team-list.component/team-list.component */ "./src/components/team-list.component/team-list.component.ts");
/* harmony import */ var _components_technologies_component_technologies_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/technologies.component/technologies.component */ "./src/components/technologies.component/technologies.component.ts");
/* harmony import */ var _components_team_member_component_team_member_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/team-member.component/team-member.component */ "./src/components/team-member.component/team-member.component.ts");
/* harmony import */ var _components_footer_component_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/footer-component/footer.component */ "./src/components/footer-component/footer.component.ts");
/* harmony import */ var _angularMaterial_angularMaterial_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../angularMaterial/angularMaterial.module */ "./src/angularMaterial/angularMaterial.module.ts");
/* harmony import */ var angular_inviewport__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angular-inviewport */ "./node_modules/angular-inviewport/angular-inviewport.es5.js");
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ "./node_modules/@nicky-lenaers/ngx-scroll-to/fesm5/nicky-lenaers-ngx-scroll-to.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Basic





// Components








// Modules



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_header_component_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                _components_mobile_competence_component_mobile_cometence_component__WEBPACK_IMPORTED_MODULE_7__["MobileCompetenceComponent"],
                _components_about_us_component_about_us_component__WEBPACK_IMPORTED_MODULE_8__["AboutUsComponent"],
                _components_team_list_component_team_list_component__WEBPACK_IMPORTED_MODULE_9__["TeamListComponent"],
                _components_technologies_component_technologies_component__WEBPACK_IMPORTED_MODULE_10__["TechnologiesComponent"],
                _components_team_member_component_team_member_component__WEBPACK_IMPORTED_MODULE_11__["TeamMemberComponent"],
                _components_footer_component_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angularMaterial_angularMaterial_module__WEBPACK_IMPORTED_MODULE_13__["AngularMaterialModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
                angular_inviewport__WEBPACK_IMPORTED_MODULE_14__["InViewportModule"],
                _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_15__["ScrollToModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
            ],
            providers: [],
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/components/about-us-component/about-us.component.html":
/*!*******************************************************************!*\
  !*** ./src/components/about-us-component/about-us.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"about-us\" fxLayout=\"row wrap\" fxLayout.xs=\"column\" fxLayoutAlign=\"center center\" inViewport>\n  <div class=\"about-us-title\" fxFlex=\"100%\" fxLayout=\"column\" fxLayoutAlign=\"center start\">About us</div>\n  <div class=\"about-us-member\" fxFlex=\"100%\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n    <div class=\"about-us-member-image\"></div>\n    <p class=\"about-us-member-description\">\n      Server and Frontend department of the Mobile Competence Center of Worldline implements and develops mobility\n      solutions focused on improving business processes and reduce costs for customers.\n      The human factor is a key aspect in our business. According to the unwritten IT law, the quality of the product\n      is only as good as the team that produced it.\n    </p>\n    <p class=\"about-us-member-description\">\n      The core of our team consists of united, mentally nimble, experienced, like-minded professionals and we make sure\n      we are always educated, trained, and following the leading edge technology domain, across platforms and devices.\n      With almost 20 programmers on staff, they are experts in the most commonly used programming languages and\n      frameworks: Node.js, Angular & AngularJS, Typescript, JavaScript, Sass/LESS, Java, Spring, C++, C, Python, Perl,\n      C#, Swift, LUA and more!\n    </p>\n    <p class=\"about-us-member-description\">\n      Our emphasis on education, methodologies and training brings employees that have skills in several\n      specializations, which returns a comprehensive knowledge and experience in all stages of the software development\n      life cycle process.\n    </p>\n    <p class=\"about-us-member-description\">\n      Through our dedicated development team, we enable leading and emerging companies to develop high-end IT solutions\n      for their businesses. Find out more about each of us!\n    </p>\n  </div>\n</div>"

/***/ }),

/***/ "./src/components/about-us-component/about-us.component.scss":
/*!*******************************************************************!*\
  !*** ./src/components/about-us-component/about-us.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".about-us {\n  height: auto;\n  color: white;\n  background-color: #0066a1; }\n  .about-us .about-us-member {\n    padding: 20px 20px 20px;\n    margin-bottom: 3%; }\n  .about-us .about-us-member-image {\n    background-image: url('about-us.png');\n    background-size: contain;\n    margin: 20px 0;\n    width: 100%;\n    height: 25vh;\n    background-repeat: no-repeat;\n    background-position: center; }\n  .about-us .about-us-title {\n    font-family: 'Stag Book';\n    font-weight: bold;\n    overflow: hidden;\n    white-space: nowrap;\n    font-size: 35px;\n    margin: 90px;\n    text-align: center;\n    letter-spacing: .15em;\n    color: white; }\n  .about-us .about-us-member-description {\n    padding: 0 20px;\n    font-weight: bold;\n    font-size: 23px;\n    margin: 20px 20px;\n    text-align: center; }\n  @media (min-width: 992px) {\n  .about-us .about-us-member-description {\n    margin: 20px 280px; } }\n"

/***/ }),

/***/ "./src/components/about-us-component/about-us.component.ts":
/*!*****************************************************************!*\
  !*** ./src/components/about-us-component/about-us.component.ts ***!
  \*****************************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AboutUsComponent = /** @class */ (function () {
    function AboutUsComponent() {
    }
    AboutUsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mcc-about-us',
            template: __webpack_require__(/*! ./about-us.component.html */ "./src/components/about-us-component/about-us.component.html"),
            styles: [__webpack_require__(/*! ./about-us.component.scss */ "./src/components/about-us-component/about-us.component.scss")]
        })
    ], AboutUsComponent);
    return AboutUsComponent;
}());



/***/ }),

/***/ "./src/components/footer-component/footer.component.html":
/*!***************************************************************!*\
  !*** ./src/components/footer-component/footer.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\" fxFlex=\"100\">\n    <footer fxFlex=\"100\" fxLayout=\"column\" fxLayoutAlign=\"end center\">\n        <div class=\"logos-wrapper\" fxFlex=\"100\" fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"space-around center\">\n            <div class=\"logo\">\n                <a target=\"_blank\" href=\"http://worldline.com\"><img src=\"assets/img/WL.png\" /></a>\n            </div>\n            <div class=\"logo\">\n                <a target=\"_blank\" href=\"http://www.tempos21.com/web/\"><img src=\"assets/img/WL-mcc.png\" /></a>\n            </div>\n        </div>\n        <a href=\"mailto:dl-wl-mcc-server@worldline.com\" class=\"mailto-wrapper\">\n            <i class=\"fas fa-envelope mailto-icon\"></i>\n            <span class=\"mailto\">Send us an Email</span>\n        </a>\n        <div class=\"brand-name\">Eric Álvarez Chinchilla - Killian Perea Ruiz - Alejandro Rivas Moreira</div>\n        <div class=\"brand-name\">Copyright © 2018 Tempos 21, Worldline Mobile Competence Center. All rights reserved.</div>\n    </footer>\n</div>"

/***/ }),

/***/ "./src/components/footer-component/footer.component.scss":
/*!***************************************************************!*\
  !*** ./src/components/footer-component/footer.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer .brand-name {\n  font-weight: bold;\n  font-size: 14px;\n  padding: 5px 0;\n  text-align: center;\n  color: #0066a1; }\n\n.footer .mailto-wrapper {\n  margin-bottom: 20px;\n  text-decoration: none; }\n\n.footer .mailto-wrapper .mailto {\n    font-weight: bold;\n    font-size: 26px;\n    padding: 10px 0;\n    margin-bottom: 20px;\n    text-align: center;\n    color: #0066a1; }\n\n.footer .mailto-wrapper .mailto-icon {\n    text-decoration: none;\n    font-weight: bold;\n    font-size: 26px;\n    padding: 10px;\n    text-align: center;\n    color: #0066a1; }\n\n.footer .logos-wrapper {\n  margin: 30px 0;\n  width: 100%; }\n\n.footer .logos-wrapper .logo {\n    display: flex; }\n\n.footer .logos-wrapper .logo img {\n      height: 100px; }\n"

/***/ }),

/***/ "./src/components/footer-component/footer.component.ts":
/*!*************************************************************!*\
  !*** ./src/components/footer-component/footer.component.ts ***!
  \*************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mcc-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/components/footer-component/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/components/footer-component/footer.component.scss")]
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/components/header-component/header.component.html":
/*!***************************************************************!*\
  !*** ./src/components/header-component/header.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <mat-toolbar-row>\n    <div (click)=\"emitClick('mobile-competence')\" fxLayoutAlign=\"center center\">\n      <span class=\"logo\">\n        <img src=\"assets/img/icon-body.png\" />\n      </span>\n    </div>\n    <span class=\"spacer\"></span>\n    <span class=\"spacer\"></span>\n    <div class=\"references\" fxLayout=\"row\" fxLayoutAlign=\"center center\" fxShow=\"false\" fxShow.gt-sm=\"true\">\n      <button mat-button class=\"header-button\" (click)=\"emitClick('about-us')\" fxFlex=\"100%\" fxFlex.gt-sm=\"30%\" fxFlex.gt-xs=\"70%\"\n        fxLayoutAlign=\"center center\">About us</button>\n      <button mat-button class=\"header-button\" (click)=\"emitClick('team')\" fxFlex=\"100%\" fxFlex.gt-sm=\"30%\" fxFlex.gt-xs=\"70%\"\n        fxLayoutAlign=\"center center\">Our team</button>\n      <button mat-button class=\"header-button\" (click)=\"emitClick('technologies')\" fxFlex=\"100%\" fxFlex.gt-sm=\"30%\" fxFlex.gt-xs=\"70%\"\n        fxLayoutAlign=\"center center\">Technologies</button>\n    </div>\n    <button mat-button [matMenuTriggerFor]=\"menu\" fxShow=\"true\" fxShow.gt-sm=\"false\">\n      <mat-icon class=\"icon\">clear_all</mat-icon>\n    </button>\n    <mat-menu #menu=\"matMenu\">\n      <button mat-menu-item class=\"menu-button\" (click)=\"emitClick('mobile-competence')\">Mobile Competence\n      </button>\n      <button mat-menu-item class=\"menu-button\" (click)=\"emitClick('about-us')\">About us\n      </button>\n      <button mat-menu-item class=\"menu-button\" (click)=\"emitClick('team')\">Team</button>\n      <button mat-menu-item class=\"menu-button\" (click)=\"emitClick('technologies')\">Technologies</button>\n    </mat-menu>\n  </mat-toolbar-row>\n</mat-toolbar>"

/***/ }),

/***/ "./src/components/header-component/header.component.scss":
/*!***************************************************************!*\
  !*** ./src/components/header-component/header.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@-webkit-keyframes inside {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(-100%);\n            transform: translateY(-100%); }\n  75% {\n    opacity: 0.1; }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0%);\n            transform: translateY(0%); } }\n\n@keyframes inside {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(-100%);\n            transform: translateY(-100%); }\n  75% {\n    opacity: 0.1; }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0%);\n            transform: translateY(0%); } }\n\n.logo {\n  display: flex;\n  cursor: pointer; }\n\n.logo img {\n    height: 40px; }\n\n.spacer {\n  flex: 1 1 auto; }\n\n.references {\n  height: 100%; }\n\n.references button {\n    font-size: 18px; }\n\n.references .header-button {\n    color: white;\n    padding: 0px 30px;\n    text-decoration: none;\n    text-transform: uppercase;\n    font-weight: bold;\n    height: 100%; }\n\n.mat-toolbar {\n  color: white;\n  background-color: #0066a1d7;\n  position: fixed;\n  z-index: 2; }\n\n.icon {\n  padding: 0 10px; }\n\n.menu-button {\n  color: #0066a1;\n  font-weight: bold;\n  text-decoration: none;\n  text-transform: uppercase;\n  background-color: white; }\n\n@media (min-width: 992px) {\n  .logo img {\n    height: 50px; } }\n"

/***/ }),

/***/ "./src/components/header-component/header.component.ts":
/*!*************************************************************!*\
  !*** ./src/components/header-component/header.component.ts ***!
  \*************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.section = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    HeaderComponent.prototype.emitClick = function (target) {
        this.section.emit(target);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], HeaderComponent.prototype, "section", void 0);
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mcc-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/components/header-component/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/components/header-component/header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/components/mobile-competence-component/mobile-cometence.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/components/mobile-competence-component/mobile-cometence.component.ts ***!
  \**********************************************************************************/
/*! exports provided: MobileCompetenceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileCompetenceComponent", function() { return MobileCompetenceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MobileCompetenceComponent = /** @class */ (function () {
    function MobileCompetenceComponent() {
    }
    MobileCompetenceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mcc-mobile-competence',
            template: __webpack_require__(/*! ./mobile-competence.component.html */ "./src/components/mobile-competence-component/mobile-competence.component.html"),
            styles: [__webpack_require__(/*! ./mobile-competence.component.scss */ "./src/components/mobile-competence-component/mobile-competence.component.scss")]
        })
    ], MobileCompetenceComponent);
    return MobileCompetenceComponent;
}());



/***/ }),

/***/ "./src/components/mobile-competence-component/mobile-competence.component.html":
/*!*************************************************************************************!*\
  !*** ./src/components/mobile-competence-component/mobile-competence.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mobile-competence\" fxFlex fxLayout=\"column\" fxLayoutAlign=\"center center\" inViewport>\n  <div class=\"mobile-competence-letter\" fxFlex fxLayout=\"row\" fxLayoutAlign=\"center center\">\n    <span>SERVER TEAM</span>\n  </div>\n  <div class=\"mobile-image-wrapper\" fxFlex fxLayout=\"row\" fxLayoutAlign=\"center center\">\n    <div class=\"mobile-competence-image\"></div>\n  </div>\n  <div class=\"mobile-competence-letter\" fxFlex fxLayout=\"row\" fxLayoutAlign=\"center end\">\n    <span>Madrid - Barcelona - Cáceres</span>\n  </div>\n</div>"

/***/ }),

/***/ "./src/components/mobile-competence-component/mobile-competence.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/components/mobile-competence-component/mobile-competence.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mobile-competence {\n  background-image: url('photo3.jpg');\n  background-repeat: no-repeat;\n  width: 100%;\n  height: 100vh;\n  background-position: center;\n  background-size: cover;\n  box-shadow: 0px 100vh rgba(0, 102, 161, 0.3) inset; }\n  .mobile-competence .mobile-image-wrapper {\n    width: 90%; }\n  .mobile-competence .mobile-image-wrapper .mobile-competence-image {\n      background-image: url('icon-body.png');\n      background-size: contain;\n      background-position: center;\n      background-repeat: no-repeat;\n      width: 100%;\n      height: 40vh; }\n  .mobile-competence .mobile-competence-letter {\n    color: white;\n    font-weight: bolder;\n    font-size: 30px;\n    text-align: center;\n    padding: 20px; }\n  @media (min-width: 992px) {\n  .mobile-competence .mobile-competence-letter {\n    font-size: 47px; } }\n"

/***/ }),

/***/ "./src/components/team-list.component/team-list.component.html":
/*!*********************************************************************!*\
  !*** ./src/components/team-list.component/team-list.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"team\" fxLayout=\"row wrap\" fxLayout.xs=\"column\" inViewport>\n  <div class=\"team-title\" fxFlex=\"100%\" fxLayout=\"column\" fxLayoutAlign=\"center start\">Our team</div>\n  <mcc-team-member *ngFor=\"let member of team\" [member]=\"member\" fxFlex=\"33%\" fxLayout=\"row\" fxLayoutAlign=\"center start\"></mcc-team-member>\n</div>"

/***/ }),

/***/ "./src/components/team-list.component/team-list.component.scss":
/*!*********************************************************************!*\
  !*** ./src/components/team-list.component/team-list.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".team-title {\n  font-family: 'Stag Book';\n  font-weight: bold;\n  overflow: hidden;\n  white-space: nowrap;\n  font-size: 35px;\n  margin: 20px 40px 40px;\n  text-align: center;\n  letter-spacing: .15em;\n  color: #0066a1; }\n"

/***/ }),

/***/ "./src/components/team-list.component/team-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/components/team-list.component/team-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: TeamListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamListComponent", function() { return TeamListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _constants_team_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/team.constants */ "./src/constants/team.constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TeamListComponent = /** @class */ (function () {
    function TeamListComponent() {
        this.team = _constants_team_constants__WEBPACK_IMPORTED_MODULE_1__["TeamMembers"];
    }
    TeamListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mcc-team-list',
            template: __webpack_require__(/*! ./team-list.component.html */ "./src/components/team-list.component/team-list.component.html"),
            styles: [__webpack_require__(/*! ./team-list.component.scss */ "./src/components/team-list.component/team-list.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TeamListComponent);
    return TeamListComponent;
}());



/***/ }),

/***/ "./src/components/team-member.component/team-member.component.html":
/*!*************************************************************************!*\
  !*** ./src/components/team-member.component/team-member.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"team-member\" fxLayout=\"column\" fxLayoutAlign=\"center center\" fxFlex=\"100%\" inViewport [debounce]=\"0\">\n  <div class=\"team-member-avatar\" [style.background-image]=\"'url('+member.photo+')'\"></div>\n  <div class=\"team-member-name\"> {{ member.name }} </div>\n  <div class=\"team-member-job-position\"> {{ member.position }} </div>\n  <p class=\"team-member-description\"> {{ member.description }} </p>\n  <div fxLayout=\"row\" fxLayoutAlign=\"center center\" fxFlex=\"100%\">\n    <div class=\"team-member-icon-list\" *ngFor=\"let social of member.social\">\n      <a target=\"_blank\" href=\"{{ social.url }}\">\n        <i class=\"{{ social.icon }} icon-link\"></i>\n      </a>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/components/team-member.component/team-member.component.scss":
/*!*************************************************************************!*\
  !*** ./src/components/team-member.component/team-member.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@-webkit-keyframes inside {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(-100%);\n            transform: translateY(-100%); }\n  75% {\n    opacity: 0.1; }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0%);\n            transform: translateY(0%); } }\n\n@keyframes inside {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(-100%);\n            transform: translateY(-100%); }\n  75% {\n    opacity: 0.1; }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0%);\n            transform: translateY(0%); } }\n\n.team-member {\n  padding: 10px 20px;\n  margin-bottom: 1%; }\n\n.team-member .team-member-avatar {\n    background-size: cover;\n    -ms-grid-row-align: center;\n        align-self: center;\n    border-radius: 50%;\n    width: 150px;\n    height: 150px; }\n\n.team-member .team-member-name {\n    font-family: 'Stag Book';\n    font-weight: bold;\n    font-size: 25px;\n    margin: 10px;\n    text-align: center; }\n\n.team-member.in-viewport {\n    -webkit-animation: inside 400ms ease-out 1;\n            animation: inside 400ms ease-out 1; }\n\n.team-member .team-member-job-position {\n    font-size: 23px;\n    font-weight: bold;\n    margin: 0 0 10px 0; }\n\n.team-member .team-member-description {\n    font-size: 20px;\n    font-weight: bold;\n    text-align: center; }\n\n.team-member .team-member-icon-list {\n    margin: 10px; }\n\n.team-member .team-member-icon-list .icon-link {\n      font-size: 26px;\n      color: #0066a1; }\n"

/***/ }),

/***/ "./src/components/team-member.component/team-member.component.ts":
/*!***********************************************************************!*\
  !*** ./src/components/team-member.component/team-member.component.ts ***!
  \***********************************************************************/
/*! exports provided: TeamMemberComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamMemberComponent", function() { return TeamMemberComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TeamMemberComponent = /** @class */ (function () {
    function TeamMemberComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TeamMemberComponent.prototype, "member", void 0);
    TeamMemberComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mcc-team-member',
            template: __webpack_require__(/*! ./team-member.component.html */ "./src/components/team-member.component/team-member.component.html"),
            styles: [__webpack_require__(/*! ./team-member.component.scss */ "./src/components/team-member.component/team-member.component.scss")]
        })
    ], TeamMemberComponent);
    return TeamMemberComponent;
}());



/***/ }),

/***/ "./src/components/technologies.component/technologies.component.html":
/*!***************************************************************************!*\
  !*** ./src/components/technologies.component/technologies.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"technologies\" fxLayout=\"row wrap\" fxLayout.xs=\"column\" fxLayoutAlign=\"center center\">\n  <div class=\"technologies-title\" fxFlex=\"100%\" fxLayout=\"column\" fxLayoutAlign=\"center start\">Technologies</div>\n  <div class=\"technologies-group\" fxFlex=\"100%\" fxFlex.gt-sm=\"50%\" fxLayout.gt-sm=\"row wrap\" fxLayout=\"column\"\n    fxLayoutAlign=\"center center\">\n    <div class=\"technologies-group-title\" fxFlex=\"100%\" fxLayout=\"column\" fxLayoutAlign=\"center center\">FRONTEND</div>\n    <a target=\"_blank\" href=\"{{frontTech.link}}\" *ngFor=\"let frontTech of technologies.frontend\" class=\"technologies-item\" fxFlex=\"100%\" fxFlex.gt-sm=\"50%\"\n      fxLayoutAlign=\"center center\">\n      <div class=\"technologies-item-image\" fxLayoutAlign=\"center center\">\n        <div class=\"technology-image-wrapper\">\n          <div matTooltip=\"{{frontTech.tooltip}}\" class=\"logo-wrapper\" [style.background-image]=\"'url('+frontTech.logo+')'\"></div>\n        </div>\n      </div>\n    </a>\n  </div>\n  <div class=\"technologies-group\" fxFlex=\"100%\" fxFlex.gt-sm=\"50%\" fxLayout.gt-sm=\"row wrap\" fxLayout=\"column\"\n    fxLayoutAlign=\"center center\">\n    <div class=\"technologies-group-title\" fxFlex=\"100%\" fxLayout=\"column\" fxLayoutAlign=\"center center\">BACKEND</div>\n    <a target=\"_blank\" href=\"{{backTech.link}}\" *ngFor=\"let backTech of technologies.backend\" class=\"technologies-item\" fxFlex=\"100%\"\n      fxFlex.gt-sm=\"50%\" fxLayoutAlign=\"center center\">\n      <div class=\"technologies-item-image\" fxLayoutAlign=\"center center\">\n        <div class=\"technology-image-wrapper\">\n          <div matTooltip=\"{{backTech.tooltip}}\" class=\"logo-wrapper\" [style.background-image]=\"'url('+backTech.logo+')'\"></div>\n        </div>\n      </div>\n    </a>\n  </div>\n</div>"

/***/ }),

/***/ "./src/components/technologies.component/technologies.component.scss":
/*!***************************************************************************!*\
  !*** ./src/components/technologies.component/technologies.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".technologies {\n  background-color: #0066a1; }\n  .technologies .technologies-title {\n    font-family: 'Stag Book';\n    font-weight: bold;\n    overflow: hidden;\n    white-space: nowrap;\n    font-size: 35px;\n    margin: 65px 90px;\n    text-align: center;\n    letter-spacing: .15em;\n    color: white; }\n  .technologies .technologies-group {\n    font-size: 25px;\n    font-weight: bold;\n    font-family: 'Stag Book';\n    color: white;\n    text-align: center;\n    margin-bottom: 100px; }\n  .technologies .technologies-item {\n    padding: 20px 10px; }\n  .technologies .technologies-item-image {\n    background-color: rgba(255, 255, 255, 0.6);\n    border-radius: 50%; }\n  .technologies .technologies-item-image .technology-image-wrapper {\n      width: 250px;\n      height: 250px;\n      display: flex;\n      align-items: center;\n      justify-content: center; }\n  .technologies .technologies-item-image .technology-image-wrapper .logo-wrapper {\n        width: 175px;\n        height: 175px;\n        background-size: contain;\n        background-position: center;\n        background-repeat: no-repeat; }\n  .technologies .technologies-group-title {\n    font-family: 'Stag Book';\n    font-weight: bold;\n    overflow: hidden;\n    white-space: nowrap;\n    font-size: 25px;\n    margin: 0 0 40px 0;\n    text-align: center;\n    letter-spacing: .15em;\n    color: white; }\n"

/***/ }),

/***/ "./src/components/technologies.component/technologies.component.ts":
/*!*************************************************************************!*\
  !*** ./src/components/technologies.component/technologies.component.ts ***!
  \*************************************************************************/
/*! exports provided: TechnologiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TechnologiesComponent", function() { return TechnologiesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _constants_technologies_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/technologies.constants */ "./src/constants/technologies.constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TechnologiesComponent = /** @class */ (function () {
    function TechnologiesComponent() {
        this.technologies = _constants_technologies_constants__WEBPACK_IMPORTED_MODULE_1__["Technologies"];
    }
    TechnologiesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mcc-technologies',
            template: __webpack_require__(/*! ./technologies.component.html */ "./src/components/technologies.component/technologies.component.html"),
            styles: [__webpack_require__(/*! ./technologies.component.scss */ "./src/components/technologies.component/technologies.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TechnologiesComponent);
    return TechnologiesComponent;
}());



/***/ }),

/***/ "./src/constants/team.constants.ts":
/*!*****************************************!*\
  !*** ./src/constants/team.constants.ts ***!
  \*****************************************/
/*! exports provided: TeamMembers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamMembers", function() { return TeamMembers; });
var TeamMembers = [
    {
        name: 'Adrian Borrego Martinez',
        photo: 'assets/img/members/AdrianBorrego.png',
        description: 'Haters gonna hate',
        position: 'DEVELOPER',
        social: [
            {
                icon: 'fab fa-github',
                url: 'https://github.com/adryy5'
            }
        ]
    },
    {
        name: 'Alberto Iglesias Gonzalo',
        photo: 'assets/img/members/AlbertoIglesias.jpg',
        description: 'Metrosexual part-time and full-time thinker.',
        position: 'DEVELOPER',
        social: [
            {
                icon: 'fab fa-linkedin-in',
                url: 'https://www.linkedin.com/in/alberto-iglesias-gonzalo-023511a9/'
            },
            {
                icon: 'fab fa-github',
                url: 'https://github.com/srkapi'
            }
        ]
    },
    {
        name: 'Alejandro Rivas Moreira',
        photo: 'assets/img/members/AlejandroRivas.jpg',
        description: 'It is over anakin, I have the high ground',
        position: 'DEVELOPER',
        social: [
            {
                icon: 'fab fa-github',
                url: 'https://github.com/AlexHikari/'
            }
        ]
    },
    {
        name: 'Alejandro Verbo Macias',
        photo: 'assets/img/members/AlejandroVerbo.jpg',
        description: 'There are two rules for success: 1) Never say everything you know',
        position: 'DEVELOPER',
        social: [
            {
                icon: 'fab fa-linkedin-in',
                url: 'https://www.linkedin.com/in/alejandro-verbo-0822227/'
            },
            {
                icon: 'fab fa-github',
                url: 'https://github.com/averbo'
            }
        ]
    },
    {
        name: 'Ana Avilés Herrero',
        photo: 'assets/img/members/AnaAviles.jpg',
        description: 'No information found',
        position: 'DEVELOPER',
        social: [
            {
                icon: 'fab fa-linkedin-in',
                url: 'https://www.linkedin.com/in/ana-avil%C3%A9s-b228079/'
            },
            {
                icon: 'fab fa-github',
                url: 'https://github.com/aAvilesh'
            }
        ]
    },
    {
        name: 'Ana María Castaño Díaz',
        photo: 'assets/img/members/AnaMariaCastaño.png',
        description: 'My richness is life',
        position: 'DEVELOPER',
        social: [
            {
                icon: 'fab fa-github',
                url: 'https://github.com/AnaaMaria25'
            }
        ]
    },
    {
        name: 'Antonio Fiñana Sanchez',
        photo: 'assets/img/members/AntonioFinana.jpg',
        description: 'Nice to meet myself',
        position: 'DEVELOPER',
        social: [
            {
                icon: 'fab fa-linkedin-in',
                url: 'https://www.linkedin.com/in/antonio-fi%C3%B1ana-30a40b49/?originalSubdomain=es'
            },
            {
                icon: 'fab fa-github',
                url: 'https://github.com/afinana'
            }
        ]
    },
    {
        name: 'Cristina Figueres Nuñez',
        photo: 'assets/img/members/CristinaFigueres.jpg',
        description: ' I am too old for this shit... ',
        position: 'DEVELOPER',
        social: [
            {
                icon: 'fab fa-linkedin-in',
                url: 'https://es.linkedin.com/in/cristinafigueres'
            },
            {
                icon: 'fab fa-github',
                url: 'https://github.com/cristinafigueres'
            }
        ]
    },
    {
        name: 'Dani Bautista Miralles',
        photo: 'assets/img/members/DaniBautista.png',
        description: 'There is no spoon',
        position: 'DEVELOPER',
        social: [
            {
                icon: 'fab fa-linkedin-in',
                url: 'https://www.linkedin.com/in/daniel-bautista-miralles-14707181/'
            },
            {
                icon: 'fab fa-github',
                url: 'https://github.com/Dabami'
            }
        ]
    },
    {
        name: 'Eric Álvarez Chinchilla',
        photo: 'assets/img/members/EricAlvarez.jpg',
        description: '#nofilter #frontend #developer #worldline',
        position: 'DEVELOPER',
        social: [
            {
                icon: 'fab fa-linkedin-in',
                url: 'https://www.linkedin.com/in/eric-alvarez-chinchilla/'
            },
            {
                icon: 'fab fa-github',
                url: 'https://github.com/ealch'
            }
        ]
    },
    {
        name: 'Jairo Costa Barriga',
        photo: 'assets/img/members/JairoCosta.jpg',
        description: 'magic is the science we do not understand yet',
        position: 'SCHOLARSHIP HOLDER',
        social: [
            {
                icon: 'fab fa-linkedin-in',
                url: 'https://www.linkedin.com/in/jairocostaes'
            },
            {
                icon: 'fab fa-github',
                url: 'https://github.com/soyJairoCosta'
            }
        ]
    },
    {
        name: 'Jordi Escudero Subirana',
        photo: 'assets/img/members/JordiEscudero.jpg',
        description: 'The any type in Typescript was build for me!',
        position: 'HEAD',
        social: [
            {
                icon: 'fab fa-linkedin-in',
                url: 'https://www.linkedin.com/in/jordi-escudero/'
            },
            {
                icon: 'fab fa-github',
                url: 'https://github.com/jordiescudero'
            }
        ]
    },
    {
        name: 'Jorge Oíz Acosta',
        photo: 'assets/img/members/JorgeOiz.jpg',
        description: 'To change is to progress',
        position: 'DEVELOPER',
        social: [
            {
                icon: 'fab fa-linkedin-in',
                url: 'https://www.linkedin.com/in/jorge-oiz-acosta-80a34b57/'
            },
            {
                icon: 'fab fa-github',
                url: 'https://github.com/JorgeOiz'
            }
        ]
    },
    {
        name: 'Jose Luis Pleguezuelos Aguilera',
        photo: 'assets/img/members/JoseLuisPleguezuelos.jpg',
        description: 'Do not take life seriously; total, you will not live out of it',
        position: 'DEVELOPER',
        social: [
            {
                icon: 'fab fa-linkedin-in',
                url: 'https://www.linkedin.com/in/jose-luis-pleguezuelos-aguilera'
            }
        ]
    },
    {
        name: 'Juan Belmonte Rodríguez',
        photo: 'assets/img/members/JuanBelmonte.jpg',
        description: '75% water',
        position: 'DEPUTY',
        social: [
            {
                icon: 'fab fa-linkedin-in',
                url: 'https://www.linkedin.com/in/juanbelmonterodriguez/'
            },
            {
                icon: 'fab fa-github',
                url: 'https://github.com/jbelmonte'
            }
        ]
    },
    {
        name: 'Killian Perea Ruiz',
        photo: 'assets/img/members/KillianPerea.jpg',
        description: 'Do not be another brick in the wall',
        position: 'DEVELOPER',
        social: [
            {
                icon: 'fab fa-linkedin-in',
                url: 'https://www.linkedin.com/in/killianperea/'
            },
            {
                icon: 'fab fa-github',
                url: 'https://github.com/killianperea'
            }
        ]
    },
    {
        name: 'Raul Fernandez Garcia',
        photo: 'assets/img/members/RaulFernandez.jpg',
        description: 'The any type in Typescript was build for me!',
        position: 'SCHOLARSHIP HOLDER',
        social: [
            {
                icon: 'fab fa-linkedin-in',
                url: 'https://www.linkedin.com/in/raulfer/'
            },
            {
                icon: 'fab fa-github',
                url: 'https://github.com/raul97fernandez'
            }
        ]
    },
    {
        name: 'Sergio Calero Robles',
        photo: 'assets/img/members/SergioCalero.jpg',
        description: '-It is not possible! -No, it is necessary',
        position: 'DEVELOPER',
        social: [
            {
                icon: 'fab fa-linkedin-in',
                url: 'https://www.linkedin.com/in/sergio-calero-robles/'
            },
            {
                icon: 'fab fa-github',
                url: 'https://github.com/RedParabola'
            }
        ]
    },
    {
        name: 'Xavier Cases Camats',
        photo: 'assets/img/members/XaviCases.jpg',
        description: 'Be the one',
        position: 'DEVELOPER',
        social: [
            {
                icon: 'fab fa-linkedin-in',
                url: 'https://es.linkedin.com/in/xaviercasescamats'
            },
            {
                icon: 'fab fa-github',
                url: 'https://github.com/xeviscc'
            }
        ]
    }
];


/***/ }),

/***/ "./src/constants/technologies.constants.ts":
/*!*************************************************!*\
  !*** ./src/constants/technologies.constants.ts ***!
  \*************************************************/
/*! exports provided: Technologies */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Technologies", function() { return Technologies; });
var Technologies = {
    frontend: [
        {
            name: 'angular',
            logo: 'assets/img/logos/angular.svg',
            tooltip: 'Angular',
            link: 'https://angular.io/'
        },
        {
            name: 'ionic',
            logo: 'assets/img/logos/ionic.svg',
            tooltip: 'Ionic',
            link: 'https://ionicframework.com/'
        },
        {
            name: 'sass',
            logo: 'assets/img/logos/sass.svg',
            tooltip: 'SASS',
            link: 'https://sass-lang.com/'
        },
        {
            name: 'cordova',
            logo: 'assets/img/logos/cordova.png',
            tooltip: 'Cordova',
            link: 'https://cordova.apache.org/'
        }
    ],
    backend: [
        {
            name: 'node',
            logo: 'assets/img/logos/node.png',
            tooltip: 'Node',
            link: 'https://nodejs.org/en/'
        },
        {
            name: 'docker',
            logo: 'assets/img/logos/docker.svg',
            tooltip: 'Docker',
            link: 'https://www.docker.com/'
        },
        {
            name: 'mongodb',
            logo: 'assets/img/logos/mongodb.svg',
            tooltip: 'Mongo DB',
            link: 'https://www.mongodb.com/en'
        },
        {
            name: 'java',
            logo: 'assets/img/logos/java.svg',
            tooltip: 'Java',
            link: 'https://java.com/en/'
        }
    ]
};


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

module.exports = __webpack_require__(/*! /Users/killianperearuiz/workspace/frontend-backend-server-team/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map