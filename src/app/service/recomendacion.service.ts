import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class RecomendacionService {
  private baseUrl = "http://localhost:8080/recomendaciones";
  constructor(private http: HttpClient) {}

  getRecomendacion(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createRecomendacion(recomendacion: any): Observable<any> {
    return this.http.post(this.baseUrl, recomendacion);
  }

  updateRecomendacion(id: number, value: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteRecomendacion(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  getRecomendacionList(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  getRecomendacionById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/nombre/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(this.baseUrl);
  }
}
