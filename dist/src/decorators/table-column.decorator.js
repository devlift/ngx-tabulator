import TableColumnModel from '../models/table-column.model';
import TableColumnOptions from '../models/table-column-options.model';
export var TableColumn = function (label, options) {
    var o = options || {};
    return function (target, property) {
        Object.defineProperties(target, (_a = {},
            _a[property + "-table-metadata"] = {
                value: {
                    name: property,
                    label: label || property,
                    format: o.format,
                    defaultValue: o.defaultValue
                },
                enumerable: false,
                configurable: false
            },
            _a));
        var _a;
    };
};
//# sourceMappingURL=table-column.decorator.js.map