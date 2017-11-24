# ngx-tabulator

Decorator-driven table creation for Angular.

# Usage

## `@TableColumn`

`@TableColumn(name?: string, options?: TableColumnOptions)`

Make the decorator's target a table column.

- `name`: Header for column
- `options`: Options for the table column
	- `format?: TableColumnFormat`: Special formatting for the data in this column (i.e. currency, date, etc.)
	- `defaultValue?: any`: Default value for this column, if optional

## `TabulatorService`

Service to create `TableColumn[]` from a class that has been annotated with `@TableColumn`.

Usage: `TabulatorService.build( class ): TableColumn[]`

## `tabulator`

Directive to render a tabulator table.

Usage: `<tabulator [rows]="rows" [columns]="columns" [sortable]="true">`

- `rows`: Data rows of the table
- `columns`: Generated `TableColumn[]` of the table
- `sortable`: If the table is sortable by clicking on the headers

# Example

```
class TestModel {
	@TableColumn('Date', { format: TableColumnFormat.Date } )
	public date: number = 0;

	@TableColumn('Comment')
	public comment: string = "";
	
	@TableColumn('Fruit', { defaultValue: 1, format: TableColumnFormat.Currency } )
	public fruit?: number = 3;
	
	@TableColumn('Misc')
	public misc: string = "";
}

...

const tService = new TabulatorService();
const cols = tService.build( TestModel );
const rows: TestModel[] = [
	{ date: 1511452603000, comment: 'a comment', misc: 'misc' },
	{ date: 1411442602000, comment: 'second comment', fruit: 3, misc: 'another' }
];

...

// outputs table with 2 rows and 4 columns
<tabulator [rows]="rows" [columns]="cols" [sortable]="true"></tabulator>
```

# Contributing

1. `npm test`
2. `npm run-script build`
