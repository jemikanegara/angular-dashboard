import { Component, OnInit } from '@angular/core';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { ValidLoginData } from './auth'
import { FormGroup, FormControl, Validators } from '@angular/forms';

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

  auth = new FormGroup(
    {
      username: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required)
    }
  )

  error: string = ""

  onSubmit() {
    const status = this.auth.status
    const { username, password } = this.auth.value

    if (status === "INVALID") this.error = "Please fill all field"
    else if (username !== ValidLoginData.username && password !== ValidLoginData.password) this.error = "Invalid username or password"
    else this.error = ""
  }

  onCloseModal(){
    this.error = ""
  }

  constructor() { }

  ngOnInit() {
  }

}
