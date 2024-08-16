import { Component, OnDestroy, OnInit } from '@angular/core';
import { PortfolioService } from '../services/portfolio.service';
import { Certificates } from '../models/certificate.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent implements OnInit , OnDestroy{

certificates$?:Observable<Certificates[]>

  constructor(private services : PortfolioService){}
  
  ngOnInit(): void {
    //service call to get certificate details 
    this.certificates$ = this.services.getcertificates();
  }

  selectedCertificate: Certificates | null = null;

  showOverlay(certificate: Certificates): void {
    this.selectedCertificate = certificate;
  }

  hideOverlay(): void {
    this.selectedCertificate = null;
  }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
}
