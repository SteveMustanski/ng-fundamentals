import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from "@angular/router";

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./profile.component.css']
})

export class LoginComponent implements OnInit {
  userName:string
  password:string
  constructor(private authService:AuthService, private router:Router) { }

  login(formValues) {
    this.authService.loginUser(formValues.userName, formValues.password)
    this.router.navigate(['events'])
  }

  cancel() {
    this.router.navigate(['events'])
  }

  ngOnInit() { }
}
