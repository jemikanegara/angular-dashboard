import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  loading$: Observable<boolean>
  constructor(private store: Store<{ loading: boolean }>) {
    this.loading$ = store.pipe(select('loading'))
  }

  ngOnInit() {
  }

}
