import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FontPickerModule, FontPickerConfigInterface } from 'ngx-font-picker';
import { PerfectScrollbarModule, PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { AppComponent } from './app.component';

const FONT_PICKER_CONFIG: FontPickerConfigInterface = {
  // Change this to your Google API key
  apiKey: 'AIzaSyA9S7DY0khhn9JYcfyRWb1F6Rd2rwtF_mA'
};

@NgModule({
    bootstrap: [
      AppComponent
    ],
    declarations: [
      AppComponent
    ],
    imports: [
      BrowserModule,
      FormsModule,
      FlexLayoutModule,
      ReactiveFormsModule,
      FontPickerModule.forRoot(FONT_PICKER_CONFIG)
    ]
})
export class AppModule {}
