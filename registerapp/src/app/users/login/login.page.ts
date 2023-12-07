import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuario ={
    email:"",
    password:""
  }

  constructor() { }

  userslogin(){

  }

  ngOnInit() {
  }

}
