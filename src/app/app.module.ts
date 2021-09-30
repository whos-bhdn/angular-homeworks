import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Homework12Component } from './homework12/homework12.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { Homework13Component } from './homework13/homework13.component';
import { Homework14Component } from './homework14/homework14.component';

@NgModule({
  declarations: [
    AppComponent,
    Homework12Component,
    Homework13Component,
    Homework14Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
