import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AreaService {
  private baseUrl = "http://localhost:8080/areas";
  constructor(private http: HttpClient) {}

  getArea(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createArea(area: any): Observable<any> {
    return this.http.post(this.baseUrl, area);
  }

  updateArea(id: number, value: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteArea(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  getAreaList(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  getAreaByNombre(nombre: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/nombre/${nombre}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(this.baseUrl);
  }
}
