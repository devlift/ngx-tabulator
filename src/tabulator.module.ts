import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabulatorTableComponent } from './components/tabulator-table/tabulator-table.component';
import { TabulatorService } from './services/tabulator.service';

@NgModule({
	imports: [
		CommonModule
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
export class TabulatorModule { }
