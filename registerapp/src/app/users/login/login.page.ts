import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/service/database.service';

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

  constructor(private database:DatabaseService) { }

  userslogin(){
    this.database.create('usuarios',this.usuario)

  }

  ngOnInit() {
  }

}
