import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http: HttpClient) { }

  private dataSummaryURL = 'http://www.mocky.io/v2/5dcddaa42e0000670072a0a3'

  getSummary(): Observable<any> {
    return this.http.get(this.dataSummaryURL)
  }
}
