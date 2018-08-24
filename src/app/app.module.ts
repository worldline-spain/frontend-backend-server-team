import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { angularMaterialModule } from './modules/angularMaterial/angularMaterial.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { InViewportModule } from 'angular-inviewport';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    angularMaterialModule,
    FlexLayoutModule,
    InViewportModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
