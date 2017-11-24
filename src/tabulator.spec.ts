import { TabulatorTableComponent } from './components/tabulator-table/tabulator-table.component';
import { TableColumn } from './decorators/table-column.decorator';
import { TabulatorService } from './services/tabulator.service';
import { TableColumnFormat } from './models/table-column-format.model';

import { CommonModule } from '@angular/common';
import { async } from '@angular/core/testing';

import 'jasmine';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {BrowserDynamicTestingModule, platformBrowserDynamicTesting} from '@angular/platform-browser-dynamic/testing';

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

describe( 'tabulator', () => {
	let fixture: ComponentFixture<TabulatorTableComponent>;
	let comp: TabulatorTableComponent;
	let de: DebugElement;
	let el: HTMLElement;

	let fg = new TabulatorService();

	TestBed.initTestEnvironment( BrowserDynamicTestingModule, platformBrowserDynamicTesting() );

	beforeEach((done) => {
		TestBed
		.configureTestingModule( {
			imports: [
				CommonModule
			],
			declarations: [ TabulatorTableComponent ]
		} )
		.compileComponents()
		.then( () => {
			fixture = TestBed.createComponent( TabulatorTableComponent );

			comp = fixture.componentInstance;
			comp.sortable = true;
			comp.columns = fg.build( TestModel );

			const rows: TestModel[] = [
				{ date: 1511452603000, comment: 'a comment', misc: 'misc' },
				{ date: 1411442602000, comment: 'second comment', fruit: 3, misc: 'another' }
			];
			comp.rows = rows;

			de = fixture.debugElement.query( By.css( '.tabulator' ) );
			el = de.nativeElement;

			done();
		} );
	});

	it( 'should create a tabulator component', () => {
		fixture.detectChanges();

		expect( comp ).toBeDefined();
	} );

	it( 'should have a thead', () => {
		fixture.detectChanges();
		
		const thead = el.querySelectorAll( 'thead' );
		expect( thead.length ).toBeGreaterThan( 0 );
	} );

	it( 'should have a thead with a single tr', () => {
		fixture.detectChanges();
		
		const trs = el.querySelectorAll( 'thead' )[0].querySelectorAll( 'tr' );
		expect( trs.length ).toEqual( 1 );
	} );

	it( 'should have a thead with a single tr with 4 th\'s', () => {
		fixture.detectChanges();
		
		const ths = el.querySelectorAll( 'thead' )[0].querySelectorAll( 'tr' )[0].querySelectorAll( 'th' );
		expect( ths.length ).toEqual( 4 );
	} );

	it( 'should have a tbody with two trs', () => {
		fixture.detectChanges();
		
		const trs = el.querySelectorAll( 'tbody' )[0].querySelectorAll( 'tr' );
		expect( trs.length ).toEqual( 2 );
	} );

	it( 'should have [0], [2] be the default value and be formatted', () => {
		fixture.detectChanges();
		
		const td = el.querySelectorAll( 'tbody' )[0].querySelectorAll( 'tr' )[0].querySelectorAll( 'td' )[2];
		expect( td.innerText.trim() ).toEqual( '$1.00' );
	} );

	it( 'should sort', () => {
		fixture.detectChanges();
		
		comp.sort( comp.columns[3] );
		fixture.detectChanges();
		expect( el.querySelectorAll( 'tbody' )[0].querySelectorAll( 'tr' )[0].querySelectorAll( 'td' )[0].innerText.trim() ).toEqual( 'Nov 23, 2017' );

		comp.sort( comp.columns[3] );
		fixture.detectChanges();
		expect( el.querySelectorAll( 'tbody' )[0].querySelectorAll( 'tr' )[0].querySelectorAll( 'td' )[0].innerText.trim() ).toEqual( 'Sep 22, 2014' );
		
		comp.sort( comp.columns[3] );
		fixture.detectChanges();
		expect( el.querySelectorAll( 'tbody' )[0].querySelectorAll( 'tr' )[0].querySelectorAll( 'td' )[0].innerText.trim() ).toEqual( 'Nov 23, 2017' );
	} );
});