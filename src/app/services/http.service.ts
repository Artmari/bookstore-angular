import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class HttpService {
  private readonly apiBaseUrl = "http://localhost:3001/api";

  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get<any>(`${this.apiBaseUrl}/products`);
  }
  
}
