import { AfterViewInit, Component, Input } from '@angular/core';

@Component({
  selector: 'edit-date',
  template: `
    <div style="width: 100%;">
        <input id="currentEdit" type="date" [value]="value" (blur)="onblur($event)" (keydown)="onkeydown($event)"/>
    </div>
  `,
})

export class EditDateComponent implements AfterViewInit {
  @Input() value = '2020-08-20';
  @Input() instance;
  private $elementEdit;
  constructor() { }

  ngAfterViewInit() {
    this.$elementEdit = document.getElementById('currentEdit');
    if (this.$elementEdit) {
      setTimeout(() => this.$elementEdit?.focus(), 50)
    }
  }

  onblur(event) {
    this.saverOrClose(event);
  }

  onkeydown(event: KeyboardEvent | any) {
    if (event.key === 'Enter') {
      event.stopPropagation();

      if (this.$elementEdit) {
        this.$elementEdit?.blur();
      } else {
        this.instance.closeCallback();
      }
    } else if (event.key === 'Esc') {
      this.instance.closeCallback();
    }


  }
  saverOrClose(event) {
    this.instance.element?.blur();
    if (event.srcElement.value !== this.value) {
      this.instance.saveCallback(event.srcElement.value);
    } else {
      this.instance.closeCallback();
    }
  }
}


