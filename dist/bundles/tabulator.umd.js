(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common'], factory) :
	(factory((global['ngx-tabulator'] = {}),global.ng.core,global.ng.common));
}(this, (function (exports,core,common) { 'use strict';

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

var TabulatorTableComponent = /** @class */ (function () {
    function TabulatorTableComponent() {
        this.columns = [];
        this.rows = [];
        this.sortable = true;
        this.desc = true;
    }
    TabulatorTableComponent.prototype.sort = function (col) {
        if (this.sortable) {
            var key_1 = col.name;
            if (this.desc) {
                this.rows = this.rows.sort(function (a, b) { return a[key_1] < b[key_1] ? 1 : -1; });
            }
            else {
                this.rows = this.rows.sort(function (a, b) { return a[key_1] > b[key_1] ? 1 : -1; });
            }
            this.desc = !this.desc;
        }
    };
    __decorate([
        core.Input()
    ], TabulatorTableComponent.prototype, "columns", void 0);
    __decorate([
        core.Input()
    ], TabulatorTableComponent.prototype, "rows", void 0);
    __decorate([
        core.Input()
    ], TabulatorTableComponent.prototype, "sortable", void 0);
    TabulatorTableComponent = __decorate([
        core.Component({
            selector: 'tabulator',
            template: "<table class=\"tabulator\">\n\t<thead *ngIf=\"columns\">\n\t\t<tr class=\"tabulator-tr\">\n\t\t\t<th *ngFor=\"let col of columns\" class=\"tabulator-th\" (click)=\"sort(col)\">\n\t\t\t\t{{col.label}}\n\t\t\t</th>\n\t\t</tr>\n\t</thead>\n\t<tbody *ngIf=\"columns\">\n\t\t<tr *ngFor=\"let row of rows\" class=\"tabulator-tr\">\n\t\t\t<td *ngFor=\"let col of columns\" class=\"tabulator-td\">\n\t\t\t\t<ng-container *ngIf=\"col.format && col.format === 'Currency'\">\n\t\t\t\t\t{{((row[col.name] || col.defaultValue) || '') | currency:'USD':'symbol'}}\n\t\t\t\t</ng-container>\n\t\t\t\t<ng-container *ngIf=\"col.format && col.format === 'Date'\">\n\t\t\t\t\t{{((row[col.name] || col.defaultValue) || '') | date}}\n\t\t\t\t</ng-container>\n\t\t\t\t<ng-container *ngIf=\"!col.format || col.format === 'None'\">\n\t\t\t\t\t{{(row[col.name] || col.defaultValue) || ''}}\n\t\t\t\t</ng-container>\n\t\t\t</td>\n\t\t</tr>\n\t</tbody>\n</table>",
        })
    ], TabulatorTableComponent);
    return TabulatorTableComponent;
}());

var TabulatorService = /** @class */ (function () {
    function TabulatorService() {
    }
    TabulatorService.prototype.build = function (model) {
        var table = [];
        var instance;
        if (model) {
            instance = new model();
        }
        if (instance) {
            for (var key in instance) {
                var d = instance[key + "-table-metadata"];
                if (d) {
                    table.push(d);
                }
            }
        }
        return table;
    };
    TabulatorService = __decorate([
        core.Injectable()
    ], TabulatorService);
    return TabulatorService;
}());

var TabulatorModule = /** @class */ (function () {
    function TabulatorModule() {
    }
    TabulatorModule = __decorate([
        core.NgModule({
            imports: [
                common.CommonModule
            ],
            declarations: [
                TabulatorTableComponent
            ],
            providers: [
                TabulatorService
            ],
            exports: [
                TabulatorTableComponent
            ]
        })
    ], TabulatorModule);
    return TabulatorModule;
}());

var TableColumn = function (label, options) {
    var o = options || {};
    return function (target, property) {
        Object.defineProperties(target, (_a = {}, _a[property + "-table-metadata"] = {
                value: {
                    name: property,
                    label: label || property,
                    format: o.format,
                    defaultValue: o.defaultValue
                },
                enumerable: false,
                configurable: false
            }, _a));
        var _a;
    };
};

(function (TableColumnFormat) {
    TableColumnFormat["None"] = "None";
    TableColumnFormat["Currency"] = "Currency";
    TableColumnFormat["Date"] = "Date";
})(exports.TableColumnFormat || (exports.TableColumnFormat = {}));

/// <reference path="./node_modules/@types/node/index.d.ts" />

exports.TabulatorModule = TabulatorModule;
exports.TabulatorTableComponent = TabulatorTableComponent;
exports.TabulatorService = TabulatorService;
exports.TableColumn = TableColumn;

Object.defineProperty(exports, '__esModule', { value: true });

})));
