import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class OrganizacionService {
  private baseUrl = "http://localhost:8080/organizaciones";
  constructor(private http: HttpClient) {}

  getOrganizacion(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createOrganizacion(organizacion: any): Observable<any> {
    return this.http.post(this.baseUrl, organizacion);
  }

  updateOrganizacion(id: number, value: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteOrganizacion(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  getOrganizacionList(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  getOrganizacionByNombre(nombre: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/organizacion/${nombre}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(this.baseUrl);
  }
}
