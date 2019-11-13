import { Component, OnInit } from '@angular/core';
import { NavList } from './nav';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  navLists: Array<NavList> = [
    {
      path: "",
      label: "Dashboard"
    },
    {
      path: "email",
      label: "Email"
    },
    {
      path: "compose",
      label: "Compose"
    },
    {
      path: "calendar",
      label: "Calendar"
    },
    {
      path: "chat",
      label: "Chat"
    },
    {
      path: "chart",
      label: "Charts"
    },
    {
      path: "form",
      label: "Forms"
    }
  ]
}
