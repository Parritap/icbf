import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Beneficiario } from '../dto/beneficiario';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  
  //5000 para el backend de express.js
  apiUrl = 'http://localhost:5000/api';

  constructor(private http:HttpClient) {
   }



  login(email: String, password: String): Observable<boolean> {
    return this.http.post<boolean>(`${this.apiUrl}/login`, {email: email, password: password});
  }

  saveBeneficiario(beneficiario: Beneficiario) {
    console.log("Method saveBeneficiario triggered");
    console.log(beneficiario);
    return this.http.post(`${this.apiUrl}/beneficiario/create`, beneficiario);
  }
}