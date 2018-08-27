import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { angularMaterialModule } from './modules/angularMaterial/angularMaterial.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { InViewportModule } from 'angular-inviewport';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    angularMaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    InViewportModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
