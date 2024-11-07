import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api/auth';

  constructor(private http: HttpClient) {}

  register(credenciales: { nombre: string, lugar: string, correo: string, clave: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, credenciales);
  }

  login(credenciales: { correo: string, clave: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credenciales);
  }

  recoverPassword(email: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/recover-password`, { email });
  }
}
