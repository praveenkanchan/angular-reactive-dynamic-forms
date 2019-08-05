import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DynamicFormControllerModule } from 'angular-reactive-dynamic-forms';

import { AppComponent } from './app.component';

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
