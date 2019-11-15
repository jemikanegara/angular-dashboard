import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { load, finish } from 'src/app/ngrx/loading.actions';
import { finalize } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http: HttpClient, private store: Store<{ loading: boolean }>) { }

  private dataSummaryURL = 'http://www.mocky.io/v2/5dcddaa42e0000670072a0a3'

  getSummary(): Observable<any> {
    this.loading()
    return this.http.get(this.dataSummaryURL).pipe(finalize(() => this.stopLoading()))
  }

  private loading() {
    this.store.dispatch(load())
  }

  private stopLoading() {
    this.store.dispatch(finish())
  }
}
