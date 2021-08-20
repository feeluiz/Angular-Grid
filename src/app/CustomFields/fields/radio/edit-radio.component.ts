import { AfterViewInit, Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'edit-radio',
  template: `
  <ng-container>
    <input id="currentEdit" type="text"
           placeholder="Pick one"
           aria-label="text"
           matInput
           [formControl]="valueControl"
           [matAutocomplete]="auto">
    <mat-autocomplete autoActiveFirstOption #auto="matAutocomplete">
      <mat-option *ngFor="let option of  instance.column.source" [value]="option">
        {{option}}
      </mat-option>
    </mat-autocomplete>
  
    </ng-container>
    `,
})

export class EditRadioComponent implements AfterViewInit {
  private _value;
  public valueControl: FormControl = new FormControl('name 1');
  private $elementEdit;

  @Input() instance;
  @Input()
  set value(value: string) {
    this._value = value;
    this.valueControl.patchValue(value);
  }

  constructor() { }

  ngAfterViewInit() {
    this.$elementEdit = document.getElementById('currentEdit');
    if (this.$elementEdit) {
      setTimeout(() =>  this.$elementEdit?.focus(), 50)
    }
  }

  onblur(event) {
    console.log('saved', event.srcElement.value);
    this.instance.saveCallback(event.srcElement.value);
  }

  onkeydown(event: KeyboardEvent | any) {
    if (event.key === 'Esc') {
      this.instance.closeCallback();
      console.log('exit');
    }
    
    if (event.key === 'Enter') {
       this.$elementEdit.blur();
    }

  }
}


