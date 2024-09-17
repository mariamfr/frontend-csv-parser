import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FileService {
  // private apiUrl: string = "http://localhost:3001/api"
  private apiUrl: string = "http://143.198.58.104:3001/api"

  constructor(private http: HttpClient) { }

  //creando funcion 
  getHeaders() {
    return new HttpHeaders({
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`
    })
  }


  uploadFile(file: File): Observable<any> {
    //recibe un archivo de tipo archivo
    //instanciar una clase es con new
    const formData = new FormData()
    //la key 'file' como esta en el postman
    formData.append('file', file)
    const headers = this.getHeaders()
    return this.http.post(`${this.apiUrl}/upload`, formData, { headers })
  }

 getAllFiles(): Observable<any> {
  const headers = this.getHeaders()
  return this.http.get(`${this.apiUrl}/files`, {headers})  
 }

 deleteFileById(id: string): Observable<any>  {
  const headers = this.getHeaders()
  return this.http.delete(`${this.apiUrl}/delete-file/${id}`, {headers})
 }

 getFileById(id: string): Observable<any>  {
  const headers = this.getHeaders()
  return this.http.get(`${this.apiUrl}/file/${id}`, {headers})
 }

}
