import {Injectable} from '@angular/core';
import TableColumn from '../models/table-column.model';

@Injectable()
export class TabulatorService {
	public build( model: any ): TableColumn[] {
		let table: TableColumn[] = [];

		let instance: any;
		if( model ) {
			instance = new model();
		}

		if( instance ) {
			for( const key in instance ) {
				let d = (<any>instance)[key + "-table-metadata"];
				if( d ) {
					table.push( d );
				}
			}
		}

		return table;
	}
}