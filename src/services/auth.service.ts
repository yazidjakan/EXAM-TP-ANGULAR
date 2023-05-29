import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated: boolean;

  constructor(private http: HttpClient) {
    this.isAuthenticated = false;
  }

  login(username: string, password: string): Observable<boolean> {
    const url = 'http://localhost:3000/users?username=' + username + '&password=' + password;
    return this.http.get<any[]>(url).pipe(
      map(users => {
        if (users.length > 0) {
          this.isAuthenticated = true;
          return true;
        }
        else {
          return false
        }
      })
    );
  }

  logout(): void {
    this.isAuthenticated = false;
  }

  getIsAuthenticated(): boolean {
    return this.isAuthenticated;
  }
}