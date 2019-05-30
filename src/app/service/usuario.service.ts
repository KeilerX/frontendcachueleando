import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class UsuarioService {
  private baseUrl = "http://localhost:8080/usuarios";
  constructor(private http: HttpClient) {}

  getUsuario(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createUsuario(usuario: any): Observable<any> {
    return this.http.post(this.baseUrl, usuario);
  }

  updateUsuario(id: number, value: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteUsuario(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  getUsuarioList(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  getUsuarioByNombres(nombres: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/nombres/${nombres}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(this.baseUrl);
  }
}
