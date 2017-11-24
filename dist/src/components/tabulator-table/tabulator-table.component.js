import { Component, Input } from '@angular/core';
import TableColumn from '../../models/table-column.model';
var TabulatorTableComponent = /** @class */ (function () {
    function TabulatorTableComponent() {
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
    return TabulatorTableComponent;
}());
export { TabulatorTableComponent };
//# sourceMappingURL=tabulator-table.component.js.map