import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { Summary } from './summary';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  summary: Array<Summary> = []

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.sharedService.getSummary().subscribe(res => {
      this.summary = res
    })
  }

}
