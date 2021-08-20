import './polyfills';

import {HttpClientModule} from '@angular/common/http';
import {CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DemoMaterialModule} from './material-module';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';

import { createCustomElement } from '@angular/elements';
import { EditDateComponent } from './app/CustomFields/fields/date/edit-date.component';

import {defineCustomElements} from '@revolist/revogrid/loader';
import { ContainerComponent } from './app/container.component';
import { ShowDateComponent } from './app/CustomFields/fields/date/show-date.component';
import { EditRadioComponent } from './app/CustomFields/fields/radio/edit-radio.component';
import { ShowRadioComponent } from './app/CustomFields/fields/radio/show-radio.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
  ],
  entryComponents: [ContainerComponent],
  declarations: [ContainerComponent,
    EditDateComponent, ShowDateComponent,
    EditRadioComponent, ShowRadioComponent],
  bootstrap: [ContainerComponent],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
  
export class AppModule {
  constructor(injector: Injector) {
    const webComponents = [
      { $: EditDateComponent, selector: 'edit-date' },
      { $: ShowDateComponent, selector: 'show-date' },
      { $: EditRadioComponent, selector: 'edit-radio' },
      { $: ShowRadioComponent, selector: 'show-radio' },

    ]
    webComponents.forEach(Component => {
      const el = createCustomElement(Component.$, { injector });
      customElements.define(Component.selector, el);
    })
  }
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
  


defineCustomElements();
