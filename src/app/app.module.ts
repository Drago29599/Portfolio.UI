import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http'; // Import HttpClientModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { IntroComponent } from './core/components/intro/intro.component';
import { SkillsComponent } from './core/components/skills/skills.component';
import { ProjectsComponent } from './core/components/projects/projects.component';
import { ProjectOverviewComponent } from './core/components/project-overview/project-overview.component';
import { MyExperienceComponent } from './core/components/my-experience/my-experience.component';
import { CertificatesComponent } from './core/components/certificates/certificates.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IntroComponent,
    SkillsComponent,
    ProjectsComponent,
    ProjectOverviewComponent,
    MyExperienceComponent,
    CertificatesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
