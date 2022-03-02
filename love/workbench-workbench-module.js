(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["workbench-workbench-module"],{

/***/ "./src/app/workbench/layout/workbench.component.css":
/*!**********************************************************!*\
  !*** ./src/app/workbench/layout/workbench.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n      :host ::ng-deep .trigger {\n        font-size: 18px;\n        line-height: 64px;\n        padding: 0 24px;\n        cursor: pointer;\n        transition: color .3s;\n      }\n\n      :host ::ng-deep .trigger:hover {\n        color: #1890ff;\n      }\n\n      :host ::ng-deep .logo {\n        height: 32px;\n        background: rgba(255, 255, 255, .2);\n        margin: 16px;\n      }\n\n      .nav{\n        min-height: calc(100vh - 32px - 32px);\n      }\n\n      .content{ \n        min-height: calc(100vh - 64px - 70px - 53px);\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd29ya2JlbmNoL2xheW91dC93b3JrYmVuY2guY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQ007UUFDRSxnQkFBZ0I7UUFDaEIsa0JBQWtCO1FBQ2xCLGdCQUFnQjtRQUNoQixnQkFBZ0I7UUFDaEIsc0JBQXNCO09BQ3ZCOztNQUVEO1FBQ0UsZUFBZTtPQUNoQjs7TUFFRDtRQUNFLGFBQWE7UUFDYixvQ0FBb0M7UUFDcEMsYUFBYTtPQUNkOztNQUVEO1FBR0Usc0NBQXNDO09BQ3ZDOztNQUNEO1FBR0UsNkNBQTZDO09BQzlDIiwiZmlsZSI6InNyYy9hcHAvd29ya2JlbmNoL2xheW91dC93b3JrYmVuY2guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgOmhvc3QgOjpuZy1kZWVwIC50cmlnZ2VyIHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogNjRweDtcbiAgICAgICAgcGFkZGluZzogMCAyNHB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHRyYW5zaXRpb246IGNvbG9yIC4zcztcbiAgICAgIH1cblxuICAgICAgOmhvc3QgOjpuZy1kZWVwIC50cmlnZ2VyOmhvdmVyIHtcbiAgICAgICAgY29sb3I6ICMxODkwZmY7XG4gICAgICB9XG5cbiAgICAgIDpob3N0IDo6bmctZGVlcCAubG9nbyB7XG4gICAgICAgIGhlaWdodDogMzJweDtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAuMik7XG4gICAgICAgIG1hcmdpbjogMTZweDtcbiAgICAgIH1cbiAgICBcbiAgICAgIC5uYXZ7XG4gICAgICAgIG1pbi1oZWlnaHQ6IC1tb3otY2FsYygxMDB2aCAtIDMycHgpO1xuICAgICAgICBtaW4taGVpZ2h0OiAtd2Via2l0LWNhbGMoMTAwdmggLSAzMnB4KTtcbiAgICAgICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDMycHggLSAzMnB4KTtcbiAgICAgIH1cbiAgICAgIC5jb250ZW50e1xuICAgICAgICBtaW4taGVpZ2h0Oi1tb3otY2FsYygxMDB2aCAtIDY0cHggLSAgNzBweCAtIDUzcHgpOyBcbiAgICAgICAgbWluLWhlaWdodDotd2Via2l0LWNhbGMoMTAwdmggLSA2NHB4IC0gIDcwcHggLSA1M3B4KTsgXG4gICAgICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSA2NHB4IC0gNzBweCAtIDUzcHgpO1xuICAgICAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/workbench/layout/workbench.component.html":
/*!***********************************************************!*\
  !*** ./src/app/workbench/layout/workbench.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <nz-layout>\n      <nz-sider nzCollapsible [(nzCollapsed)]=\"isCollapsed\" [nzTrigger]=\"triggerTemplate\">\n        <div class=\"logo\">\n        </div>\n        <ul nz-menu [nzTheme]=\"'dark'\" [nzMode]=\"'inline'\" [nzInlineCollapsed]=\"isCollapsed\" class=\"nav\">\n          <li nz-submenu>\n            <span title><i class=\"anticon anticon-user\"></i><span class=\"nav-text\">我们俩的头像</span></span>\n            <ul>\n              <li nz-menu-item>石豪杰</li>\n              <li nz-menu-item>吴晓婉</li>\n            </ul>\n          </li>\n          <li nz-menu-item (click)=\"routerLink('workbench/record')\" ><span><i class=\"anticon anticon-file\"></i><span class=\"nav-text\">记录管理</span></span></li>\n          <li nz-menu-item (click)=\"routerLink('workbench/photo')\"><span><i class=\"anticon anticon-file\"></i><span class=\"nav-text\">照片管理</span></span></li>\n        </ul>\n      </nz-sider>\n      <nz-layout>\n        <nz-header style=\"background: #fff; padding:0;\">\n          <i class=\"anticon trigger\" [class.anticon-menu-fold]=\"!isCollapsed\" [class.anticon-menu-unfold]=\"isCollapsed\" (click)=\"isCollapsed=!isCollapsed\"></i>\n        </nz-header>\n        <nz-content style=\"margin:0 16px;\">\n          <nz-breadcrumb style=\"margin:16px 0;\">\n            <nz-breadcrumb-item>User</nz-breadcrumb-item>\n            <nz-breadcrumb-item>Bill</nz-breadcrumb-item>\n          </nz-breadcrumb>\n          <div class=\"content\" style=\"padding:24px; background: #fff;\">\n            <router-outlet></router-outlet>\n            \n          </div>\n        </nz-content>\n        <nz-footer style=\"text-align: center;\">Ant Design ©2017 Implement By Angular</nz-footer>\n      </nz-layout>\n    </nz-layout>\n    <ng-template #trigger>\n      <i class=\"anticon anticon-up\"></i>\n    </ng-template>\n  "

/***/ }),

/***/ "./src/app/workbench/layout/workbench.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/workbench/layout/workbench.component.ts ***!
  \*********************************************************/
/*! exports provided: WorkbenchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkbenchComponent", function() { return WorkbenchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var WorkbenchComponent = /** @class */ (function () {
    function WorkbenchComponent(router) {
        this.router = router;
        this.isCollapsed = false;
        this.triggerTemplate = null;
    }
    /** custom trigger can be TemplateRef **/
    WorkbenchComponent.prototype.changeTrigger = function () {
        this.triggerTemplate = this.customTrigger;
    };
    WorkbenchComponent.prototype.routerLink = function (url) {
        this.router.navigate([url]);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('trigger'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], WorkbenchComponent.prototype, "customTrigger", void 0);
    WorkbenchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'workbench',
            template: __webpack_require__(/*! ./workbench.component.html */ "./src/app/workbench/layout/workbench.component.html"),
            styles: [__webpack_require__(/*! ./workbench.component.css */ "./src/app/workbench/layout/workbench.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], WorkbenchComponent);
    return WorkbenchComponent;
}());



/***/ }),

/***/ "./src/app/workbench/photo/photo-list/photo-list.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/workbench/photo/photo-list/photo-list.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n      .ant-advanced-search-form {\n        padding: 24px;\n        background: #fbfbfb;\n        border: 1px solid #d9d9d9;\n        border-radius: 6px;\n      }\n\n      .search-result-list {\n        margin-top: 16px;\n        border: 1px dashed #e9e9e9;\n        border-radius: 6px;\n        background-color: #fafafa;\n        min-height: 200px;\n        text-align: center;\n        padding-top: 80px;\n      }\n\n      [nz-form-label] {\n        overflow: visible;\n      }\n\n      button {\n        margin-left: 8px;\n      }\n    \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd29ya2JlbmNoL3Bob3RvL3Bob3RvLWxpc3QvcGhvdG8tbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7TUFDTTtRQUNFLGNBQWM7UUFDZCxvQkFBb0I7UUFDcEIsMEJBQTBCO1FBQzFCLG1CQUFtQjtPQUNwQjs7TUFFRDtRQUNFLGlCQUFpQjtRQUNqQiwyQkFBMkI7UUFDM0IsbUJBQW1CO1FBQ25CLDBCQUEwQjtRQUMxQixrQkFBa0I7UUFDbEIsbUJBQW1CO1FBQ25CLGtCQUFrQjtPQUNuQjs7TUFFRDtRQUNFLGtCQUFrQjtPQUNuQjs7TUFFRDtRQUNFLGlCQUFpQjtPQUNsQiIsImZpbGUiOiJzcmMvYXBwL3dvcmtiZW5jaC9waG90by9waG90by1saXN0L3Bob3RvLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgLmFudC1hZHZhbmNlZC1zZWFyY2gtZm9ybSB7XG4gICAgICAgIHBhZGRpbmc6IDI0cHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmYmZiZmI7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkOWQ5ZDk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgIH1cblxuICAgICAgLnNlYXJjaC1yZXN1bHQtbGlzdCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgICAgIGJvcmRlcjogMXB4IGRhc2hlZCAjZTllOWU5O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmctdG9wOiA4MHB4O1xuICAgICAgfVxuXG4gICAgICBbbnotZm9ybS1sYWJlbF0ge1xuICAgICAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICAgIH1cblxuICAgICAgYnV0dG9uIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICAgIH1cbiAgICAiXX0= */"

/***/ }),

/***/ "./src/app/workbench/photo/photo-list/photo-list.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/workbench/photo/photo-list/photo-list.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <form nz-form [formGroup]=\"validateForm\" class=\"ant-advanced-search-form\">\n      <div nz-row [nzGutter]=\"24\">\n        <div nz-col [nzSpan]=\"8\" *ngFor=\"let control of controlArray\" [style.display]=\"control.show?'block':'none'\">\n          <nz-form-item nzFlex>\n            <nz-form-label [nzFor]=\"'field'+control.index\">Field {{control.index}}</nz-form-label>\n            <nz-form-control>\n              <input nz-input placeholder=\"placeholder\" [formControlName]=\"'field'+control.index\" [attr.id]=\"'field'+control.index\">\n            </nz-form-control>\n          </nz-form-item>\n        </div>\n      </div>\n      <div nz-row>\n        <div nz-col [nzSpan]=\"24\" style=\"text-align: right;\">\n          <button nz-button [nzType]=\"'primary'\">Search</button>\n          <button nz-button (click)=\"resetForm()\">Clear</button>\n          <a style=\"margin-left:8px;font-size:12px;\" (click)=\"toggleCollapse()\">\n            Collapse\n            <i class=\"anticon\" [class.anticon-down]=\"isCollapse\" [class.anticon-up]=\"!isCollapse\"></i>\n          </a>\n        </div>\n      </div>\n    </form>\n    <div class=\"search-result-list\">\n      Search Result List\n    </div>\n  "

/***/ }),

/***/ "./src/app/workbench/photo/photo-list/photo-list.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/workbench/photo/photo-list/photo-list.component.ts ***!
  \********************************************************************/
/*! exports provided: PhotoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoListComponent", function() { return PhotoListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var PhotoListComponent = /** @class */ (function () {
    function PhotoListComponent(fb) {
        this.fb = fb;
        this.controlArray = [];
        this.isCollapse = true;
    }
    PhotoListComponent.prototype.toggleCollapse = function () {
        var _this = this;
        this.isCollapse = !this.isCollapse;
        this.controlArray.forEach(function (c, index) {
            c.show = _this.isCollapse ? (index < 6) : true;
        });
    };
    PhotoListComponent.prototype.resetForm = function () {
        this.validateForm.reset();
    };
    PhotoListComponent.prototype.ngOnInit = function () {
        this.validateForm = this.fb.group({});
        for (var i = 0; i < 10; i++) {
            this.controlArray.push({ index: i, show: i < 6 });
            this.validateForm.addControl("field" + i, new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]());
        }
    };
    PhotoListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-workbench/photo/photo-list',
            template: __webpack_require__(/*! ./photo-list.component.html */ "./src/app/workbench/photo/photo-list/photo-list.component.html"),
            styles: [__webpack_require__(/*! ./photo-list.component.css */ "./src/app/workbench/photo/photo-list/photo-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], PhotoListComponent);
    return PhotoListComponent;
}());



/***/ }),

/***/ "./src/app/workbench/record/record-list/record-list.component.css":
/*!************************************************************************!*\
  !*** ./src/app/workbench/record/record-list/record-list.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n      .ant-advanced-search-form {\n        padding: 24px;\n        background: #fbfbfb;\n        border: 1px solid #d9d9d9;\n        border-radius: 6px;\n      }\n\n      .search-result-list {\n        margin-top: 16px;\n        border: 1px dashed #e9e9e9;\n        border-radius: 6px;\n        background-color: #fafafa;\n      }\n\n      [nz-form-label] {\n        overflow: visible;\n      }\n\n      button {\n        margin-left: 8px;\n      }\n    \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd29ya2JlbmNoL3JlY29yZC9yZWNvcmQtbGlzdC9yZWNvcmQtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7TUFDTTtRQUNFLGNBQWM7UUFDZCxvQkFBb0I7UUFDcEIsMEJBQTBCO1FBQzFCLG1CQUFtQjtPQUNwQjs7TUFFRDtRQUNFLGlCQUFpQjtRQUNqQiwyQkFBMkI7UUFDM0IsbUJBQW1CO1FBQ25CLDBCQUEwQjtPQUMzQjs7TUFFRDtRQUNFLGtCQUFrQjtPQUNuQjs7TUFFRDtRQUNFLGlCQUFpQjtPQUNsQiIsImZpbGUiOiJzcmMvYXBwL3dvcmtiZW5jaC9yZWNvcmQvcmVjb3JkLWxpc3QvcmVjb3JkLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgLmFudC1hZHZhbmNlZC1zZWFyY2gtZm9ybSB7XG4gICAgICAgIHBhZGRpbmc6IDI0cHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmYmZiZmI7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkOWQ5ZDk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgIH1cblxuICAgICAgLnNlYXJjaC1yZXN1bHQtbGlzdCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgICAgIGJvcmRlcjogMXB4IGRhc2hlZCAjZTllOWU5O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG4gICAgICB9XG5cbiAgICAgIFtuei1mb3JtLWxhYmVsXSB7XG4gICAgICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgICAgfVxuXG4gICAgICBidXR0b24ge1xuICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgICAgfVxuICAgICJdfQ== */"

/***/ }),

/***/ "./src/app/workbench/record/record-list/record-list.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/workbench/record/record-list/record-list.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <form nz-form [formGroup]=\"validateForm\" class=\"ant-advanced-search-form\">\n      <div nz-row [nzGutter]=\"24\">\n        <div nz-col [nzSpan]=\"8\" *ngFor=\"let control of controlArray\" [style.display]=\"control.show?'block':'none'\">\n          <nz-form-item nzFlex>\n            <nz-form-label [nzFor]=\"'field'+control.index\">Field {{control.index}}</nz-form-label>\n            <nz-form-control>\n              <input nz-input placeholder=\"placeholder\" [formControlName]=\"'field'+control.index\" [attr.id]=\"'field'+control.index\">\n            </nz-form-control>\n          </nz-form-item>\n        </div>\n      </div>\n      <div nz-row>\n        <div nz-col [nzSpan]=\"24\" style=\"text-align: right;\">\n          <button nz-button [nzType]=\"'primary'\">Search</button>\n          <button nz-button (click)=\"resetForm()\">Clear</button>\n          <a style=\"margin-left:8px;font-size:12px;\" (click)=\"toggleCollapse()\">\n            Collapse\n            <i class=\"anticon\" [class.anticon-down]=\"isCollapse\" [class.anticon-up]=\"!isCollapse\"></i>\n          </a>\n        </div>\n      </div>\n    </form>\n    <div class=\"search-result-list\">\n      <nz-table #basicTable [nzData]=\"dataSet\">\n        <thead>\n          <tr>\n            <th>序号</th>\n            <th>时间</th>\n            <th>标题</th>\n            <th>操作</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let data of recordList\">\n            <td>{{data.content}}</td>\n            <td>{{data.date.toLocaleDateString()}}</td>\n            <td>{{data.title}}</td>\n            <td>\n              <a>Action 一 {{data.title}}</a>\n              <nz-divider nzType=\"vertical\"></nz-divider>\n              <a>Delete</a>\n            </td>\n          </tr>\n        </tbody>\n      </nz-table>\n    </div>\n  "

/***/ }),

/***/ "./src/app/workbench/record/record-list/record-list.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/workbench/record/record-list/record-list.component.ts ***!
  \***********************************************************************/
/*! exports provided: RecordListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordListComponent", function() { return RecordListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var RecordListComponent = /** @class */ (function () {
    function RecordListComponent(fb) {
        this.fb = fb;
        this.controlArray = [];
        this.isCollapse = true;
    }
    RecordListComponent.prototype.toggleCollapse = function () {
        var _this = this;
        this.isCollapse = !this.isCollapse;
        this.controlArray.forEach(function (c, index) {
            c.show = _this.isCollapse ? (index < 6) : true;
        });
    };
    RecordListComponent.prototype.resetForm = function () {
        this.validateForm.reset();
    };
    RecordListComponent.prototype.ngOnInit = function () {
        this.recordList = [{ id: '123', content: '这是内容', title: '这是标题', date: new Date() }];
        this.validateForm = this.fb.group({});
        for (var i = 0; i < 10; i++) {
            this.controlArray.push({ index: i, show: i < 6 });
            this.validateForm.addControl("field" + i, new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]());
        }
    };
    RecordListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-workbench/record/record-list',
            template: __webpack_require__(/*! ./record-list.component.html */ "./src/app/workbench/record/record-list/record-list.component.html"),
            styles: [__webpack_require__(/*! ./record-list.component.css */ "./src/app/workbench/record/record-list/record-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], RecordListComponent);
    return RecordListComponent;
}());



/***/ }),

/***/ "./src/app/workbench/workbench.module.ts":
/*!***********************************************!*\
  !*** ./src/app/workbench/workbench.module.ts ***!
  \***********************************************/
/*! exports provided: WorkbenchModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkbenchModule", function() { return WorkbenchModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _record_record_list_record_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./record/record-list/record-list.component */ "./src/app/workbench/record/record-list/record-list.component.ts");
/* harmony import */ var _layout_workbench_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout/workbench.component */ "./src/app/workbench/layout/workbench.component.ts");
/* harmony import */ var _photo_photo_list_photo_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./photo/photo-list/photo-list.component */ "./src/app/workbench/photo/photo-list/photo-list.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _workbench_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./workbench.router */ "./src/app/workbench/workbench.router.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");










var WorkbenchModule = /** @class */ (function () {
    function WorkbenchModule() {
    }
    WorkbenchModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(_workbench_router__WEBPACK_IMPORTED_MODULE_7__["workbenchRouter"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_9__["NgZorroAntdModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]
            ],
            declarations: [
                _record_record_list_record_list_component__WEBPACK_IMPORTED_MODULE_3__["RecordListComponent"],
                _layout_workbench_component__WEBPACK_IMPORTED_MODULE_4__["WorkbenchComponent"],
                _photo_photo_list_photo_list_component__WEBPACK_IMPORTED_MODULE_5__["PhotoListComponent"],
            ], exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]
            ]
        })
    ], WorkbenchModule);
    return WorkbenchModule;
}());



/***/ }),

/***/ "./src/app/workbench/workbench.router.ts":
/*!***********************************************!*\
  !*** ./src/app/workbench/workbench.router.ts ***!
  \***********************************************/
/*! exports provided: workbenchRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "workbenchRouter", function() { return workbenchRouter; });
/* harmony import */ var _layout_workbench_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout/workbench.component */ "./src/app/workbench/layout/workbench.component.ts");
/* harmony import */ var _record_record_list_record_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./record/record-list/record-list.component */ "./src/app/workbench/record/record-list/record-list.component.ts");
/* harmony import */ var _photo_photo_list_photo_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./photo/photo-list/photo-list.component */ "./src/app/workbench/photo/photo-list/photo-list.component.ts");



var workbenchRouter = [
    {
        path: '',
        component: _layout_workbench_component__WEBPACK_IMPORTED_MODULE_0__["WorkbenchComponent"],
        children: [
            {
                path: 'record/list',
                component: _record_record_list_record_list_component__WEBPACK_IMPORTED_MODULE_1__["RecordListComponent"]
            },
            {
                path: 'photo/list',
                component: _photo_photo_list_photo_list_component__WEBPACK_IMPORTED_MODULE_2__["PhotoListComponent"]
            },
            {
                path: 'record',
                redirectTo: 'record/list',
                pathMatch: 'full'
            },
            {
                path: 'photo',
                redirectTo: 'photo/list',
                pathMatch: 'full'
            }, {
                path: '**',
                component: _record_record_list_record_list_component__WEBPACK_IMPORTED_MODULE_1__["RecordListComponent"]
            }
        ]
    }
];


/***/ })

}]);
//# sourceMappingURL=workbench-workbench-module.js.map