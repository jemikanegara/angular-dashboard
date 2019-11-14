import { Component, OnInit, Input } from '@angular/core';
import { Summary } from '../summary/summary';
import { faChartBar } from "@fortawesome/free-solid-svg-icons"

@Component({
  selector: 'app-summary-data',
  templateUrl: './summary-data.component.html',
  styleUrls: ['./summary-data.component.css']
})
export class SummaryDataComponent implements OnInit {
  @Input() data: Summary
  faChartBar = faChartBar
  constructor() { }

  ngOnInit() {
  }

}
