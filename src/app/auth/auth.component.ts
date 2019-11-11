import { Component, OnInit } from '@angular/core';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faGoogle } from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  faUser = faUser
  faLock = faLock
  faFacebookF = faFacebookF
  faTwitter = faTwitter
  faGoogle = faGoogle

  constructor() { }

  ngOnInit() {
  }

}
