import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroComponent } from './core/components/intro/intro.component';
import { SkillsComponent } from './core/components/skills/skills.component';
import { ProjectOverviewComponent } from './core/components/project-overview/project-overview.component';

const routes: Routes = [
  { path: 'intro', component: IntroComponent },
  { path: 'project-overview', component: ProjectOverviewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
