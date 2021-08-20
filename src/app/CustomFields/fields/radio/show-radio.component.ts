import { Component, Input } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'show-radio',
  template: `
  <div style="
    width: 100%;
    height: 100%;
    display: flex;
    align-content: center;padding: 0 2px 0 4px;">
    <span>{{ value }}</span>
  </div>
  `
})

export class ShowRadioComponent  {
    @Input() value;
}