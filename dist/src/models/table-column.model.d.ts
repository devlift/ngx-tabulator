import { TableColumnFormat } from './table-column-format.model';
export default interface TableColumnModel {
    name: string;
    label: string;
    format?: TableColumnFormat;
    defaultValue?: any;
}
