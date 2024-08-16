
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SoftSkills, TechSkills } from '../models/skills.model';
import { IntroData } from '../intro/models/introData.model';
import { Projects } from '../models/project.model';
import { MyExperience } from '../models/myExperience.model';
import { Certificates } from '../models/certificate.model';
import { MyExperienceComponent } from '../my-experience/my-experience.component';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  
  //private Url = 'https://localhost:44357/api';
  //private Url = 'https://portfolio-api-owp2.onrender.com/api';

  constructor(private http:HttpClient) { }

  
  getTechSkills(): Observable<TechSkills[]> {
    return this.http.get<TechSkills[]>(`${environment.Url}/Skill/GetTechSkills`);
  }

  getSoftSkills(): Observable<SoftSkills[]> {
    return this.http.get<SoftSkills[]>(`${environment.Url}/Skill/GetSoftSkills`);
  }
  
  getProjects(): Observable<Projects[]> {
    return this.http.get<Projects[]>(`${environment.Url}/Portfolio/GetProjects`);
  }

  getExperience():Observable<MyExperience[]>{
    return this.http.get<MyExperience[]>(`${environment.Url}/Portfolio/GetExperience`);
  }

  getcertificates():Observable<Certificates[]>{
    return this.http.get<Certificates[]>(`${environment.Url}/Portfolio/GetCertificates`);
  }

  // // Method to get experience total from MyExperienceComponent
  // getExperienceTotal(): Observable<string> {
  //   // Create a new instance of MyExperienceComponent to access the total experience
  //   const myExperienceComponent = new MyExperienceComponent(this);
  //   return myExperienceComponent.totalExperience$;
  // }
}
