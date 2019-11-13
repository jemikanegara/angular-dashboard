import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  loginUrl = 'http://www.mocky.io/v2/5dcc073254000059009c2082'

  getLoginData(): Observable<any> {
    return this.http.get(this.loginUrl)
  }
}
