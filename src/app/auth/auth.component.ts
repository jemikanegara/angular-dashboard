import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { ValidLoginData } from './auth'
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AuthService } from './auth.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  constructor(private authService: AuthService, public router: Router) { }

  ngOnInit() {
    const token = localStorage.getItem("token")
    if (token) this.router.navigate([""])
  }

  // Icons
  faUser = faUser
  faLock = faLock
  faFacebookF = faFacebookF
  faTwitter = faTwitter
  faGoogle = faGoogle

  @Input() iAuth: boolean
  @Output() authenticating = new EventEmitter()

  // Form
  auth = new FormGroup(
    {
      username: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required)
    }
  )

  // Error
  error: string = ""

  getLoginData() {
    return this.authService.getLoginData().subscribe(res => res)
  }

  onSubmit() {
    const status = this.auth.status
    const { username, password } = this.auth.value

    if (status === "INVALID") this.error = "Please fill all field"
    else if (username !== ValidLoginData.username && password !== ValidLoginData.password) this.error = "Invalid username or password"
    else {
      this.authService.getLoginData().subscribe(res => {
        this.error = ""
        localStorage.setItem("token", res.token)
        this.router.navigate([""])
      })
    }
  }

  onCloseModal() {
    this.error = ""
  }

}
