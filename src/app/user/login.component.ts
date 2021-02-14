import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {
  userName:string
  password:string
  constructor() { }

  login(formValues) {
    console.log(formValues)
  }


  ngOnInit() { }
}
