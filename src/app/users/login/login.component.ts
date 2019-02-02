import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { User } from '../user/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router
    , private loginService: LoginService) { }
  username: string;
  password: string;
  ngOnInit() {
  }
  login(): void {
    this.loginService.
    checkLogin(new User(this.username, this.password))
      .subscribe(
        result => console.log(result),
        error => {
          console.log("error");
        }
      );
  }
}

