import { Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { PortfolioService } from '../services/portfolio.service';
import { Projects } from '../models/project.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit,OnDestroy{
  
  //Variable for project
  projects$?:Observable<Projects[]>;
  selectedProject?: Projects;

  //@ViewChild('projectOverviewModal') modalRef?: ElementRef;

  constructor(private service:PortfolioService,private router: Router,private renderer: Renderer2){}

  
  ngOnInit(): void {
    //service call to get project details
    this.projects$ = this.service.getProjects();
  }

  openOverviewModal(project: Projects): void {
    this.selectedProject = project;
    
   
    const modalElement = document.getElementById('projectOverviewModal');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement); // Bootstrap 5
      modal.show();
    }
  }
  
  openModal(): void {
    const modalElement = document.getElementById('projectOverviewModal');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
  }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
}
