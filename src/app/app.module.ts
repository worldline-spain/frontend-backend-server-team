import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';

import { angularMaterialModule } from './modules/angularMaterial/angularMaterial.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { InViewportModule } from 'angular-inviewport';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    angularMaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    InViewportModule,
    ScrollToModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
