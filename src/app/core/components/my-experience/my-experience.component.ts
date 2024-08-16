// my-experience.component.ts
import { Component, OnDestroy, OnInit, AfterViewInit } from '@angular/core';
import { MyExperience } from '../models/myExperience.model';
import { PortfolioService } from '../services/portfolio.service';
// import { ExperienceService } from '../services/experience.service'; // Import the new service
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as bootstrap from 'bootstrap';
import { ExperienceService } from '../services/experience.service';

@Component({
  selector: 'app-my-experience',
  templateUrl: './my-experience.component.html',
  styleUrls: ['./my-experience.component.css']
})
export class MyExperienceComponent implements OnInit, OnDestroy, AfterViewInit {
  
  experience$?: Observable<MyExperience[]>;
  private observer: IntersectionObserver | undefined;
  selectedExperience?: MyExperience;

  constructor(private service: PortfolioService, private experienceService: ExperienceService) {}

  ngOnInit(): void {
    this.experience$ = this.service.getExperience();
    this.experience$.pipe(
      map(experiences => this.calculateTotalExperience(experiences))
    ).subscribe(totalExperience => this.experienceService.setTotalExperience(totalExperience));
  }

  ngAfterViewInit(): void {
    this.initIntersectionObserver();
  }

  openDetailModal(exp: MyExperience): void {
    const modalElement = document.getElementById('experienceDetailModal');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
  }

  private initIntersectionObserver(): void {
    const timelineLine = document.getElementById('timelineLine');
    if (timelineLine) {
      this.observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            timelineLine.classList.add('animate');
          }
        });
      }, {
        threshold: 0.1
      });
      this.observer.observe(timelineLine);
    }
  }

  getExperienceDuration(startDate: Date, endDate: Date): string {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const placeholderDate = new Date('1900-01-01 00:00:00');
    if (end.getTime() === placeholderDate.getTime()) {
      end.setTime(Date.now());
    }
    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth();
    if (months < 0) {
      years--;
      months += 12;
    }
    if (years > 0 && months > 0) {
      return `${years} Years ${months} Months`;
    } else if (years > 0) {
      return `${years} Years`;
    } else if (months > 0) {
      return `${months} Months`;
    } else {
      return 'Less than a month';
    }
  }

  getExperienceDisplayEndDate(endDate: Date): string {
    const placeholderDate = new Date('1900-01-01 00:00:00');
    const end = new Date(endDate);
    if (end.getTime() === placeholderDate.getTime()) {
      return 'Present';
    } else {
      const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      };
      return end.toLocaleDateString('en-US', options);
    }
  }

  private calculateTotalExperience(experiences: MyExperience[]): string {
    let totalYears = 0;
    let totalMonths = 0;

    experiences.forEach(exp => {
      const startDate = new Date(exp.startDate);
      const endDate = exp.endDate ? new Date(exp.endDate) : new Date();
      const duration = this.getExperienceDuration(startDate, endDate);
      const [years, months] = this.parseDuration(duration);
      totalYears += years;
      totalMonths += months;
    });

    const yearsFromMonths = Math.floor(totalMonths / 12);
    totalYears += yearsFromMonths;
    totalMonths = totalMonths % 12;

    return `${totalYears} Years ${totalMonths} Months`;
  }

  private parseDuration(duration: string): [number, number] {
    const yearMatch = duration.match(/(\d+) Years/);
    const monthMatch = duration.match(/(\d+) Months/);
    const years = yearMatch ? parseInt(yearMatch[1], 10) : 0;
    const months = monthMatch ? parseInt(monthMatch[1], 10) : 0;
    return [years, months];
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
