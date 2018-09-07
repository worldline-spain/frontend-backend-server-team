// Basic
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from '../components/header-component/header.component';
import { MobileCompetenceComponent } from '../components/mobile-competence-component/mobile-cometence.component';
import { AboutUsComponent } from '../components/about-us-component/about-us.component';
import { TeamListComponent } from '../components/team-list.component/team-list.component';
import { TechnologiesComponent } from '../components/technologies.component/technologies.component';
import { TeamMemberComponent } from '../components/team-member.component/team-member.component';

// Modules
import { AngularMaterialModule } from '../angularMaterial/angularMaterial.module';
import { InViewportModule } from 'angular-inviewport';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MobileCompetenceComponent,
    AboutUsComponent,
    TeamListComponent,
    TechnologiesComponent,
    TeamMemberComponent
  ],
  imports: [
    BrowserModule,
    AngularMaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    InViewportModule,
    ScrollToModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
