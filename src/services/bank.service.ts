import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { agency } from 'src/services/agency';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  private url = "http://localhost:3000/agencies";

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(this.url);
  }
  getAgency(id: String) {
    return this.http.get<agency>("http://localhost:3000/agencies/" + id);
  }
  addAgencies(agency: agency): Observable<agency> {
    return this.http.post<agency>("http://localhost:3000/agencies", agency);
  }
  updateAgencies(id: String, uagency: agency): Observable<agency> {
    return this.http.put<agency>("http://localhost:3000/agencies/" + id, uagency);
  }
  deleteAgencies(id: String) {
    return this.http.delete<agency>("http://localhost:3000/agencies/" + id);
  }
}
