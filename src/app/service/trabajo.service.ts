import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Area } from "../model/area";

@Injectable({
  providedIn: "root"
})
export class TrabajoService {
  private baseUrl = "http://localhost:8080/trabajos";
  constructor(private http: HttpClient) {}

  getTrabajo(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createTrabajo(trabajo: any): Observable<any> {
    return this.http.post(this.baseUrl, trabajo);
  }

  updateTrabajo(id: number, value: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteTrabajo(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  getTrabajoList(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  getTrabajoBySueldo(sueldo: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/area/${sueldo}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(this.baseUrl);
  }
}
