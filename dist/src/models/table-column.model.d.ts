import { TableColumnFormat } from './table-column-format.model';
export default interface TableColumn {
    name: string;
    label: string;
    format?: TableColumnFormat;
    defaultValue?: any;
}
export { TableColumnFormat } from './table-column-format.model';
