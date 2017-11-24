import { Component, Input } from '@angular/core';
import TableColumnModel from '../../models/table-column.model';

@Component({
	selector: 'tabulator',
	templateUrl: './tabulator-table.component.html',
	moduleId: module.id
})
export class TabulatorTableComponent {
	@Input() columns: TableColumnModel[] = [];
	@Input() rows: any[] = [];

	@Input() sortable: boolean = true;
	private desc: boolean = true;
	
	constructor() {}

	sort(col: TableColumnModel) {
		if( this.sortable ) {
			let key = col.name;
			if( this.desc ) {
				this.rows = this.rows.sort( (a, b) => { return a[key] < b[key] ? 1 : -1; } );
			} else {
				this.rows = this.rows.sort( (a, b) => { return a[key] > b[key] ? 1 : -1; } );
			}
			this.desc = !this.desc;
		}
	}
}
