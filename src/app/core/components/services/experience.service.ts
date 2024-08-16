import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  constructor() { }
  private totalExperienceSubject = new BehaviorSubject<string>('');
  totalExperience$ = this.totalExperienceSubject.asObservable();

  // Method to update the total experience
  setTotalExperience(experience: string): void {
    this.totalExperienceSubject.next(experience);
  }
}
