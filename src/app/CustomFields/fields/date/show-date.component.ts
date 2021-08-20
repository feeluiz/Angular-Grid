import { Component, Input } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'show-date',
  template: `<span style="color: black; font-weight: bold;padding: 0 4px;">{{ _value }}</span>`,
})

export class ShowDateComponent  {
    public _value = '2020-08-20';
    @Input()
    set value(value: string) {
        this._value = moment(value).format('DD/MM/YYYY')
    }
}