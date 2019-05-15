import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DynamicFormControllerModule } from 'angular-reactive-dynamic-forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DynamicFormControllerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
