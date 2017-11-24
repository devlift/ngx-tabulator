import TableColumn from '../models/table-column.model';
import TableColumnOptions from '../models/table-column-options.model';

export const TableColumn = (label?: string, options?: TableColumnOptions) => {
	let o: TableColumnOptions = options || {};

	return (target: Object, property: string) => {
		Object.defineProperties(target, {
			[property + "-table-metadata"]: {
				value: {
					name: property,
					label: label || property,
					format: o.format,
					defaultValue: o.defaultValue
				},
				enumerable: false,
				configurable: false
			}
		} );
	};
};
