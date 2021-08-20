import {Component} from '@angular/core';
import '@revolist/revogrid';
import { ColumnTypeCustom } from './CustomFields/main/CustomField';
import { generateFakeColumns, generateFakeDataRows } from '../GenerateData';
/**
 * @title Basic Inputs
 */
@Component({
  selector: 'main-container',
    template: `
    <revo-grid [source]="rows" [columns]="columns"
    resize="true" range="true" [columnTypes]="types" theme="material">
    `,
})
export class ContainerComponent {


  columns = generateFakeColumns();
  rows = generateFakeDataRows(1000);


  types = {
    'custom': new ColumnTypeCustom()
  };
}
