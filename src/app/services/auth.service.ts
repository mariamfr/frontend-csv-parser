import { Injectable } from '@angular/core';
// conectar back con el front
import { HttpClient } from '@angular/common/http';
//permite ayudar a la conexion httpclient
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //ruta del backend para ejecutar los api rest
  // private apiUrl = "http://localhost:3001/api"
  private apiUrl = "http://143.198.58.104:3001/api"
  
  constructor(private http: HttpClient) { }

  //organizando servicio para el api register que tieen un post y un json
  register(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, { email, password })
  }

  //servicio para login
  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { email, password })
  }

  //
  getToken(): string | null {
      return sessionStorage.getItem('token')
  }

  //
  isLoggedIn() : boolean {
    return !!sessionStorage.getItem('token')
  }

  //
  logout() {
    sessionStorage.removeItem('token')
  }
}
