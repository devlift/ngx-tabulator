import TableColumnModel from '../../models/table-column.model';
export declare class TabulatorTableComponent {
    columns: TableColumnModel[];
    rows: any[];
    sortable: boolean;
    private desc;
    constructor();
    sort(col: TableColumnModel): void;
}
