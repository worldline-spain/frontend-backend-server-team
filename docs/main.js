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

module.exports = ".mat-toolbar {\r\n  color: rgba(255, 255, 255, 1);\r\n  background-color: #0066a1d7;\r\n  position: fixed;\r\n  z-index: 2;\r\n}\r\n\r\n.logo {\r\n  display: flex;\r\n}\r\n\r\n.logo>img {\r\n  height: 50px;\r\n}\r\n\r\n.icon {\r\n  padding: 0 10px;\r\n}\r\n\r\n.spacer {\r\n  flex: 1 1 auto;\r\n}\r\n\r\n/****** HOME *******/\r\n\r\n.mobile-competence {\r\n  background-image: url('photo3.jpg');\r\n  background-repeat: no-repeat;\r\n  width: 100%;\r\n  height: 100vh;\r\n  background-position: center;\r\n  background-size: cover;\r\n  box-shadow: 0px 100vh rgba(0, 102, 161, 0.1) inset;\r\n}\r\n\r\n.about-us {\r\n  height: auto;\r\n  background-color: #0066a1\r\n}\r\n\r\n.about-us-member {\r\n  padding: 20px 20px 20px;\r\n  margin: 30px;\r\n  background-color: #f5f5f5ad;\r\n}\r\n\r\n.about-us-image {\r\n  background-image: url('about-us.png');\r\n  background-size: contain;\r\n  margin: 20px 0;\r\n  width: 100%;\r\n  height: 25vh;\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n}\r\n\r\n.about-us-name {\r\n  font-family: 'Stag Book';\r\n  font-weight: bold;\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n  font-size: 2rem;\r\n  margin: 0 auto;\r\n  text-align: center;\r\n  letter-spacing: .15em;\r\n  -webkit-animation:\r\n    typing 5.5s steps(400, end),\r\n    blink-caret 2s step-end infinite;\r\n          animation:\r\n    typing 5.5s steps(400, end),\r\n    blink-caret 2s step-end infinite;\r\n}\r\n\r\n/* The typing effect */\r\n\r\n@-webkit-keyframes typing {\r\n  from {\r\n    width: 0\r\n  }\r\n\r\n  to {\r\n    width: 100%\r\n  }\r\n}\r\n\r\n@keyframes typing {\r\n  from {\r\n    width: 0\r\n  }\r\n\r\n  to {\r\n    width: 100%\r\n  }\r\n}\r\n\r\n/* The typewriter cursor effect */\r\n\r\n@-webkit-keyframes blink-caret {\r\n\r\n  from,\r\n  to {\r\n    border-color: transparent\r\n  }\r\n\r\n  50% {\r\n    border-color: orange;\r\n  }\r\n}\r\n\r\n@keyframes blink-caret {\r\n\r\n  from,\r\n  to {\r\n    border-color: transparent\r\n  }\r\n\r\n  50% {\r\n    border-color: orange;\r\n  }\r\n}\r\n\r\n.team {\r\n  padding: 30px 20px 20px;\r\n}\r\n\r\n@-webkit-keyframes inside {\r\n  0% {\r\n    opacity: 0;\r\n    -webkit-transform: translateY(-100%);\r\n            transform: translateY(-100%);\r\n  }\r\n\r\n  75% {\r\n    opacity: 0.1;\r\n  }\r\n\r\n  100% {\r\n    opacity: 1;\r\n    -webkit-transform: translateY(0%);\r\n            transform: translateY(0%);\r\n  }\r\n}\r\n\r\n@keyframes inside {\r\n  0% {\r\n    opacity: 0;\r\n    -webkit-transform: translateY(-100%);\r\n            transform: translateY(-100%);\r\n  }\r\n\r\n  75% {\r\n    opacity: 0.1;\r\n  }\r\n\r\n  100% {\r\n    opacity: 1;\r\n    -webkit-transform: translateY(0%);\r\n            transform: translateY(0%);\r\n  }\r\n}\r\n\r\n.member.in-viewport {\r\n  -webkit-animation: inside 400ms ease-out 1;\r\n          animation: inside 400ms ease-out 1\r\n}\r\n\r\n.member {\r\n  padding: 10px 20px;\r\n}\r\n\r\n.member .avatar {\r\n  background-size: cover;\r\n  -ms-grid-row-align: center;\r\n      align-self: center;\r\n  border-radius: 50%;\r\n  width: 150px;\r\n  height: 150px;\r\n}\r\n\r\n.name {\r\n  font-family: 'Stag Book';\r\n  font-weight: bold;\r\n  font-size: 2rem;\r\n  margin: 10px;\r\n  text-align: center;\r\n}\r\n\r\n.job-position {\r\n  font-size: 1.3rem;\r\n  font-weight: bold;\r\n  margin: 0 0 10px 0;\r\n}\r\n\r\n.description {\r\n  font-size: 1rem;\r\n  font-weight: bold;\r\n  text-align: justify;\r\n  font-size: 1.2rem;\r\n}\r\n\r\n.about-description {\r\n  padding: 0 8%;\r\n  font-weight: bold;\r\n  font-size: 1.2rem;\r\n  margin: 20px 0;\r\n  text-align: justify;\r\n}\r\n\r\n.icon-list {\r\n  margin-top: 10px;\r\n}\r\n\r\n.mat-button {\r\n  padding: 0px;\r\n  min-width: 0px;\r\n}\r\n\r\n@media (max-width:599px) {\r\n  .logo>img {\r\n    height: 40px;\r\n  }\r\n}\r\n\r\n.section {\r\n  width: 100%;\r\n  height: 5rem;\r\n}\r\n\r\n.tecnologies {\r\n  background-color: #0066a1;\r\n}\r\n\r\n.references {\r\n  height: 100%;\r\n}\r\n\r\n.references button {\r\n  font-size: 18px;\r\n}\r\n\r\n.header-button-notclicked {\r\n  color: white;\r\n  padding: 0px 30px;\r\n  text-decoration: none;\r\n  text-transform: uppercase;\r\n  font-weight: bold;\r\n  height: 100%;\r\n}\r\n\r\n.header-button-clicked {\r\n  color: white;\r\n  font-weight: bold;\r\n  padding: 0px 30px;\r\n  text-decoration: none;\r\n  text-transform: uppercase;\r\n  height: 100%;\r\n  background-color: #003f63d7;\r\n}\r\n\r\n.menu-button {\r\n  color: white;\r\n  font-weight: bold;\r\n  text-decoration: none;\r\n  text-transform: uppercase;\r\n  background-color: #0066a1d7;\r\n}\r\n\r\n.divider {\r\n  background-image: url('data:image/png;base64,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');\r\n  width: 100%;\r\n  height: 200px;\r\n  -webkit-transform: scaleY(-1);\r\n          transform: scaleY(-1);\r\n}\r\n\r\n.mobile-competence-image {\r\n  background-image: url('icon-body.png');\r\n  background-size: contain;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  width: 100%;\r\n  height: 40vh;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"home\">\r\n    <mat-toolbar color=\"primary\">\r\n        <mat-toolbar-row>\r\n            <button mat-button (click)=\"onMenuClick(0)\"\r\n                [ngx-scroll-to]=\"'#mobile-competence'\" fxLayoutAlign=\"center center\">\r\n                <span class=\"logo\">\r\n                    <img src=\"assets/icon-body.png\" />\r\n                </span>\r\n            </button>\r\n            <span class=\"spacer\"></span>\r\n            <!-- <span>WORLDLINE SERVER TEAM</span> -->\r\n            <span class=\"spacer\"></span>\r\n            <!-- <mat-icon class=\"icon\">business</mat-icon>\r\n            <mat-icon class=\"icon\">clear_all</mat-icon> -->\r\n            <div class=\"references\" fxLayout=\"row\" fxLayoutAlign=\"center center\" fxShow=\"false\" fxShow.gt-sm=\"true\">\r\n                <button mat-button (click)=\"onMenuClick(1)\" [ngClass]=\"selectedIndex === 1 ? 'header-button-clicked' : 'header-button-notclicked'\"\r\n                    [ngx-scroll-to]=\"'#about-us'\" [ngx-scroll-to-offset]=\"scrollSize\" fxFlex=\"100%\" fxFlex.gt-sm=\"30%\" fxFlex.gt-xs=\"70%\"\r\n                    fxLayoutAlign=\"center center\">About us</button>\r\n                <button mat-button (click)=\"onMenuClick(2)\" [ngClass]=\"selectedIndex === 2 ? 'header-button-clicked' : 'header-button-notclicked'\"\r\n                    [ngx-scroll-to]=\"'#team'\" [ngx-scroll-to-offset]=\"scrollSize\" fxFlex=\"100%\" fxFlex.gt-sm=\"30%\" fxFlex.gt-xs=\"70%\"\r\n                    fxLayoutAlign=\"center center\">Our team</button>\r\n                <button mat-button (click)=\"onMenuClick(3)\" [ngClass]=\"selectedIndex === 3 ? 'header-button-clicked' : 'header-button-notclicked'\"\r\n                    [ngx-scroll-to]=\"'#tecnologies'\" [ngx-scroll-to-offset]=\"scrollSize\" fxFlex=\"100%\" fxFlex.gt-sm=\"30%\" fxFlex.gt-xs=\"70%\"\r\n                    fxLayoutAlign=\"center center\">Tecnologies</button>\r\n                <button mat-button (click)=\"onMenuClick(4)\" [ngClass]=\"selectedIndex === 4 ? 'header-button-clicked' : 'header-button-notclicked'\"\r\n                    [ngx-scroll-to]=\"'#contact'\" [ngx-scroll-to-offset]=\"scrollSize\" fxFlex=\"100%\" fxFlex.gt-sm=\"30%\" fxFlex.gt-xs=\"70%\"\r\n                    fxLayoutAlign=\"center center\">Contact</button>\r\n            </div>\r\n            <button mat-button [matMenuTriggerFor]=\"menu\" fxShow=\"true\" fxShow.gt-sm=\"false\">\r\n                <mat-icon class=\"icon\">clear_all</mat-icon>\r\n            </button>\r\n            <mat-menu #menu=\"matMenu\">\r\n                <button mat-menu-item class=\"menu-button\" [ngx-scroll-to-offset]=\"scrollSize\" [ngx-scroll-to]=\"'#mobile-competence'\">Mobile Competence</button>\r\n                <button mat-menu-item class=\"menu-button\" [ngx-scroll-to-offset]=\"scrollSize\" [ngx-scroll-to]=\"'#about-us'\">About us</button>\r\n                <button mat-menu-item class=\"menu-button\" [ngx-scroll-to-offset]=\"scrollSize\" [ngx-scroll-to]=\"'#team'\">Team</button>\r\n                <button mat-menu-item class=\"menu-button\" [ngx-scroll-to-offset]=\"scrollSize\" [ngx-scroll-to]=\"'#tecnologies'\">Tecnologies</button>\r\n                <button mat-menu-item class=\"menu-button\" [ngx-scroll-to-offset]=\"scrollSize\" [ngx-scroll-to]=\"'#contact'\">Contact</button>\r\n            </mat-menu>\r\n        </mat-toolbar-row>\r\n    </mat-toolbar>\r\n    <div id=\"mobile-competence\" class=\"mobile-competence\" fxLayout=\"row\" fxLayoutAlign=\"center center\" inViewport (onInViewportChange)=\"onViewportChange($event,0)\">\r\n        <div fxFlex=\"90%\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n            <div class=\"mobile-competence-image\"></div>\r\n        </div>\r\n    </div>\r\n    <div id=\"about-us\" class=\"about-us\" fxLayout=\"row wrap\" fxLayout.xs=\"column\" fxLayoutAlign=\"center center\" inViewport (onInViewportChange)=\"onViewportChange($event,1)\">\r\n        <div class=\"about-us-member\" fxFlex=\"100%\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n            <div class=\"about-us-name\">About us</div>\r\n            <div class=\"about-us-image\"></div>\r\n            <p class=\"about-description\"> Vivamus sed sodales sapien, in lacinia elit. Duis tincidunt eros vel ex cursus, non molestie ex varius. Duis\r\n                imperdiet odio urna, vitae dictum lorem tristique non. Pellentesque habitant morbi tristique senectus et\r\n                netus et malesuada fames ac turpis egestas. Cras faucibus tempor metus sit amet tristique. Sed aliquet ut\r\n                dui quis pharetra. Donec blandit laoreet gravida. Aliquam a suscipit enim. Nam vehicula sed erat sit amet\r\n                auctor. In at rhoncus enim. Donec lacinia vestibulum orci in egestas. Phasellus id lacinia elit. Vivamus\r\n                eleifend faucibus interdum. Donec viverra elementum odio, sed rutrum ante aliquam at. Ut dolor diam, semper\r\n                nec ligula nec, iaculis finibus dolor. Mauris placerat ut felis vel pretium. Aenean tincidunt feugiat ex,\r\n                ac iaculis ipsum ullamcorper a. Duis a lacus non dolor fermentum consectetur quis vel lorem. Fusce fringilla\r\n                neque sit amet auctor porta. Duis eleifend pretium velit, sit amet posuere dolor interdum vitae. Donec aliquet\r\n                arcu at leo rhoncus dignissim. Proin sed risus egestas, venenatis libero ut, elementum est. Vivamus feugiat\r\n                blandit tortor, porta efficitur mauris maximus semper. Nunc interdum nisl augue, quis tincidunt sem ultrices\r\n                fermentum.\r\n            </p>\r\n        </div>\r\n    </div>\r\n    <div class=\"divider\"></div>\r\n    <div id=\"team\" class=\"team\" fxLayout=\"row wrap\" fxLayout.xs=\"column\" inViewport (onInViewportChange)=\"onViewportChange($event,2)\">\r\n        <div class=\"member\" fxFlex=\"100%\" fxFlex.gt-sm=\"33%\" fxFlex.gt-xs=\"33%\" fxLayout=\"column\" fxLayoutAlign=\"center center\" inViewport\r\n            [debounce]=\"0\">\r\n            <div class=\"avatar\" [ngStyle]=\"{'background-image': backImage[0]}\"></div>\r\n            <div class=\"name\">Name 1</div>\r\n            <div class=\"job-position\">JOB_POSITION</div>\r\n            <p class=\"description\"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ligula risus, ornare non gravida eget, congue\r\n                nec mi. Aliquam sed odio orci. Mauris sit amet diam finibus, porttitor nunc quis, aliquet nisl. Sed sagittis\r\n                hendrerit rhoncus. </p>\r\n            <div class=\"icon-list\">\r\n                <button mat-button>\r\n                    <mat-icon class=\"icon\">clear_all</mat-icon>\r\n                </button>\r\n                <button mat-button>\r\n                    <mat-icon class=\"icon\">clear_all</mat-icon>\r\n                </button>\r\n                <button mat-button>\r\n                    <mat-icon class=\"icon\">clear_all</mat-icon>\r\n                </button>\r\n                <button mat-button>\r\n                    <mat-icon class=\"icon\">clear_all</mat-icon>\r\n                </button>\r\n            </div>\r\n        </div>\r\n        <div class=\"member\" fxFlex=\"100%\" fxFlex.gt-sm=\"33%\" fxFlex.gt-xs=\"33%\" fxLayout=\"column\" fxLayoutAlign=\"center center\" inViewport\r\n            [debounce]=\"0\">\r\n            <div class=\"avatar\" [ngStyle]=\"{'background-image': backImage[1]}\"></div>\r\n            <div class=\"name\">Name 2</div>\r\n            <div class=\"job-position\">JOB_POSITION</div>\r\n            <p class=\"description\"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ligula risus, ornare non gravida eget, congue\r\n                nec mi. Aliquam sed odio orci. Mauris sit amet diam finibus, porttitor nunc quis, aliquet nisl. Sed sagittis\r\n                hendrerit rhoncus. </p>\r\n            <div class=\"icon-list\">\r\n                <button mat-button>\r\n                    <mat-icon class=\"icon\">clear_all</mat-icon>\r\n                </button>\r\n                <button mat-button>\r\n                    <mat-icon class=\"icon\">clear_all</mat-icon>\r\n                </button>\r\n                <button mat-button>\r\n                    <mat-icon class=\"icon\">clear_all</mat-icon>\r\n                </button>\r\n                <button mat-button>\r\n                    <mat-icon class=\"icon\">clear_all</mat-icon>\r\n                </button>\r\n            </div>\r\n        </div>\r\n        <div class=\"member\" fxFlex=\"100%\" fxFlex.gt-sm=\"33%\" fxFlex.gt-xs=\"33%\" fxLayout=\"column\" fxLayoutAlign=\"center center\" inViewport\r\n            [debounce]=\"0\">\r\n            <div mat-card-avatar class=\"avatar\" [ngStyle]=\"{'background-image': backImage[2]}\"></div>\r\n            <div class=\"name\">Name 3</div>\r\n            <div class=\"job-position\">JOB_POSITION</div>\r\n            <p class=\"description\"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ligula risus, ornare non gravida eget, congue\r\n                nec mi. Aliquam sed odio orci. Mauris sit amet diam finibus, porttitor nunc quis, aliquet nisl. Sed sagittis\r\n                hendrerit rhoncus. </p>\r\n            <div class=\"icon-list\">\r\n                <button mat-button>\r\n                    <mat-icon class=\"icon\">clear_all</mat-icon>\r\n                </button>\r\n                <button mat-button>\r\n                    <mat-icon class=\"icon\">clear_all</mat-icon>\r\n                </button>\r\n                <button mat-button>\r\n                    <mat-icon class=\"icon\">clear_all</mat-icon>\r\n                </button>\r\n                <button mat-button>\r\n                    <mat-icon class=\"icon\">clear_all</mat-icon>\r\n                </button>\r\n            </div>\r\n        </div>\r\n        <div class=\"member\" fxFlex=\"100%\" fxFlex.gt-sm=\"33%\" fxFlex.gt-xs=\"33%\" fxLayout=\"column\" fxLayoutAlign=\"center center\" inViewport\r\n            [debounce]=\"0\">\r\n            <div class=\"avatar\" [ngStyle]=\"{'background-image': backImage[3]}\"></div>\r\n            <div class=\"name\">Name 4</div>\r\n            <div class=\"job-position\">JOB_POSITION</div>\r\n            <p class=\"description\"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ligula risus, ornare non gravida eget, congue\r\n                nec mi. Aliquam sed odio orci. Mauris sit amet diam finibus, porttitor nunc quis, aliquet nisl. Sed sagittis\r\n                hendrerit rhoncus. </p>\r\n            <div class=\"icon-list\">\r\n                <button mat-button>\r\n                    <mat-icon class=\"icon\">clear_all</mat-icon>\r\n                </button>\r\n                <button mat-button>\r\n                    <mat-icon class=\"icon\">clear_all</mat-icon>\r\n                </button>\r\n                <button mat-button>\r\n                    <mat-icon class=\"icon\">clear_all</mat-icon>\r\n                </button>\r\n                <button mat-button>\r\n                    <mat-icon class=\"icon\">clear_all</mat-icon>\r\n                </button>\r\n            </div>\r\n        </div>\r\n        <div class=\"member\" fxFlex=\"100%\" fxFlex.gt-sm=\"33%\" fxFlex.gt-xs=\"33%\" fxLayout=\"column\" fxLayoutAlign=\"center center\" inViewport\r\n            [debounce]=\"0\">\r\n            <div class=\"avatar\" [ngStyle]=\"{'background-image': backImage[4]}\"></div>\r\n            <div class=\"name\">Name 5</div>\r\n            <div class=\"job-position\">JOB_POSITION</div>\r\n            <p class=\"description\"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ligula risus, ornare non gravida eget, congue\r\n                nec mi. Aliquam sed odio orci. Mauris sit amet diam finibus, porttitor nunc quis, aliquet nisl. Sed sagittis\r\n                hendrerit rhoncus. </p>\r\n            <div class=\"icon-list\">\r\n                <button mat-button>\r\n                    <mat-icon class=\"icon\">clear_all</mat-icon>\r\n                </button>\r\n                <button mat-button>\r\n                    <mat-icon class=\"icon\">clear_all</mat-icon>\r\n                </button>\r\n                <button mat-button>\r\n                    <mat-icon class=\"icon\">clear_all</mat-icon>\r\n                </button>\r\n                <button mat-button>\r\n                    <mat-icon class=\"icon\">clear_all</mat-icon>\r\n                </button>\r\n            </div>\r\n        </div>\r\n        <div class=\"member\" fxFlex=\"100%\" fxFlex.gt-sm=\"33%\" fxFlex.gt-xs=\"33%\" fxLayout=\"column\" fxLayoutAlign=\"center center\" inViewport\r\n            [debounce]=\"0\">\r\n            <div class=\"avatar\" [ngStyle]=\"{'background-image': backImage[5]}\"></div>\r\n            <div class=\"name\">Name 5</div>\r\n            <div class=\"job-position\">JOB_POSITION</div>\r\n            <p class=\"description\"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ligula risus, ornare non gravida eget, congue\r\n                nec mi. Aliquam sed odio orci. Mauris sit amet diam finibus, porttitor nunc quis, aliquet nisl. Sed sagittis\r\n                hendrerit rhoncus. </p>\r\n            <div class=\"icon-list\">\r\n                <button mat-button>\r\n                    <mat-icon class=\"icon\">clear_all</mat-icon>\r\n                </button>\r\n                <button mat-button>\r\n                    <mat-icon class=\"icon\">clear_all</mat-icon>\r\n                </button>\r\n                <button mat-button>\r\n                    <mat-icon class=\"icon\">clear_all</mat-icon>\r\n                </button>\r\n                <button mat-button>\r\n                    <mat-icon class=\"icon\">clear_all</mat-icon>\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div id=\"Tecnologies\" class=\"tecnologies\" fxLayout=\"row\" fxLayoutAlign=\"center center\" fxLayout.xs=\"column\" inViewport (onInViewportChange)=\"onViewportChange($event,3)\">\r\n        <div class=\"tecnologies-\" fxFlex=\"100%\" fxFlex.gt-sm=\"25%\" fxFlex.gt-xs=\"33%\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n\r\n        </div>\r\n        <div class=\"tecnologies-member\" fxFlex=\"100%\" fxFlex.gt-sm=\"25%\" fxFlex.gt-xs=\"33%\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n\r\n        </div>\r\n    </div>\r\n</div>"

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
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'frontend-backend-server-team';
        this.selectedIndex = 0;
        this.bSections = [false, false, false, false, false];
        this.backImage = [
            'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxwPsyja2qthIP6ou09Phl0qxGoaeLexJIdGe153YeUDRwq1ve)',
            'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC0wbCPRqtOC47fqP1J8g8CV_np6abo_q1B46kSBgu1Dtrw2aG)',
            'url(https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=350)',
            'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEw7pURtosUkpqRdjRKJ4tPD3HWyjWBvwrvRQtrQS9ILSVJvgl)',
            'url(http://www.innoenergy.com/wp-content/uploads/2015/11/Elena-Bou-20151.jpg)',
            'url(https://businessportraitsnyc.com/wp-content/uploads/2012/09/BusinessPortrait_hler.jpg)'
        ];
        this.scrollSize = -64;
    }
    AppComponent.prototype.onViewportChange = function (inViewport, index) {
        this.bSections[index] = inViewport;
        for (var index_1 = 0, flag = true; index_1 < 5 && flag; index_1++) {
            if (this.bSections[index_1] === true) {
                flag = false;
                this.selectedIndex = index_1;
            }
        }
    };
    AppComponent.prototype.onMenuClick = function (index) {
        this.selectedIndex = index;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
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
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ "./node_modules/@nicky-lenaers/ngx-scroll-to/fesm5/nicky-lenaers-ngx-scroll-to.js");
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
                angular_inviewport__WEBPACK_IMPORTED_MODULE_5__["InViewportModule"],
                _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_7__["ScrollToModule"].forRoot()
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