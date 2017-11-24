import { Injectable } from '@angular/core';
import TableColumn from '../models/table-column.model';
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
    return TabulatorService;
}());
export { TabulatorService };
//# sourceMappingURL=tabulator.service.js.map