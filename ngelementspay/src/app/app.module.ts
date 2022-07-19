import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, DialogAnimationsExampleDialog } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { createCustomElement } from '@angular/elements';



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
  providers: [],
 // bootstrap: [AppComponent]
 entryComponents:[AppComponent,DialogAnimationsExampleDialog]
})
export class AppModule { 
constructor(private injector:Injector){}

ngDoBootstrap(){
  const element = createCustomElement(AppComponent,{injector:this.injector})
  customElements.define('app-mypay',element)
}

}
