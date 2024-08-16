import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import { Projects } from '../models/project.model';

@Component({
  selector: 'app-project-overview',
  templateUrl: './project-overview.component.html',
  styleUrls: ['./project-overview.component.css']
})
export class ProjectOverviewComponent implements OnInit{
  project?: Projects;
  constructor(private router: Router){}
  ngOnInit(): void {
    // Retrieve the project data from the navigation state
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras?.state?.['project']) {
      this.project = navigation.extras.state['project'];
    }
  }

}
