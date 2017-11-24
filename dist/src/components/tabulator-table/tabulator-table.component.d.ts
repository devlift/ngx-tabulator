import TableColumn from '../../models/table-column.model';
export declare class TabulatorTableComponent {
    columns: TableColumn[];
    rows: any[];
    sortable: boolean;
    private desc;
    constructor();
    sort(col: TableColumn): void;
}
