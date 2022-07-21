import { Injector, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, DialogAnimationsExampleDialog } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { createCustomElement } from '@angular/elements';
import { APP_BASE_HREF } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    DialogAnimationsExampleDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule
  ],

  //Note:- Add this Below Provider while building the angular material for the  React Application
  // providers: [{provide: APP_BASE_HREF, useValue : '/' }],

  //Note:- Add this Below Provider while building the angular material for the  React Application
  providers: [],

  //While Building the angular Element the boostrap value should be  commmented Out
  bootstrap: [AppComponent],

  //Note:- Since Integration of Angular Elements Based Application as Element then the Angular Doset ecognize that as Standardized Element 
  //       So we need to Provide the Hint that  by allowing the Custom Element Schema
  //schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

  //Note:- While Building the Angular Elements Application, Make Sure that the whichever the components needs to be exposed should be 
  //  Defined in the entryComponents
  //entryComponents: [AppComponent, DialogAnimationsExampleDialog]
})
export class AppModule {
  constructor(private injector: Injector) { }

  ngDoBootstrap() {
    const element = createCustomElement(AppComponent, { injector: this.injector })
    customElements.define('app-mypay', element)
  }

}
