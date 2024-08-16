import { Component, OnDestroy, OnInit } from '@angular/core';
import { PortfolioService } from '../services/portfolio.service';
import { catchError, EMPTY, Observable, Subscription } from 'rxjs';
import { SoftSkills, TechSkills } from '../models/skills.model';
import { IntroService } from '../intro/services/intro.service';
import { IntroData } from '../intro/models/introData.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit,OnDestroy {

techSkillsSubcription?:Subscription

techSkill$?:Observable<TechSkills[]>;
softSkill$?:Observable<SoftSkills[]>;

introData$?:Observable<IntroData[]>;
  constructor(private service:PortfolioService){}
 
  ngOnInit(): void {
    this.techSkill$ = this.service.getTechSkills();
    // this.techSkills$ = this.portfolioService.getTechSkills();
    this.softSkill$ = this.service.getSoftSkills();
  }
  
  ngOnDestroy(): void {
   this.techSkillsSubcription?.unsubscribe(); 
  }

}
