import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IntroData } from '../models/introData.model';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class IntroService {
//private apiUrl = 'https://localhost:44357/api;
//private apiUrl = 'https://portfolio-api-owp2.onrender.com/api';


  constructor(private http:HttpClient) { }

  getIntroData():Observable<IntroData[]>{
    return this.http.get<IntroData[]>(`${environment.Url}/Portfolio/GetDetails`);
  }

  // getTechSkills():Observable<Skills[]>{
  //   return this.http.get<Skills[]>(`${this.apiUrl_profile}GetTechSkills`);
  // }
}
