import {Injectable} from '@angular/core';
import TableColumnModel from '../models/table-column.model';

@Injectable()
export class TabulatorService {
	public build( model: any ): TableColumnModel[] {
		let table: TableColumnModel[] = [];

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