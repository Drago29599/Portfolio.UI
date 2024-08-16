import { Component, OnDestroy, OnInit } from '@angular/core';
import { IntroService } from './services/intro.service';
import { Observable, Subscription } from 'rxjs';
import { IntroData } from './models/introData.model';
import { PortfolioService } from '../services/portfolio.service';
import { ExperienceService } from '../services/experience.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit,OnDestroy{
  //variables for intro

  //subcription variable
  introDataSubcription?: Subscription; 

  introData$?:Observable<IntroData[]>;
  totalExperience$?: Observable<string>;
  constructor(private service:IntroService,private portfolioservice:PortfolioService,private experienceService : ExperienceService){}
  
  // constructor(private introservices)
  ngOnInit(): void {
    this.introData$=this.service.getIntroData();
    // Subscribe to the total experience from PortfolioService
    this.totalExperience$ = this.experienceService.totalExperience$;
  }

  
  ngOnDestroy(): void {
    this.introDataSubcription?.unsubscribe;
  }

  

}
