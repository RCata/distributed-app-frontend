import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user/user.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class LoginService {

    constructor(private http: HttpClient) { }
  
    checkLogin(user: User) : Observable<any>{
        return this.http.post(environment.LOGIN_URL, user)
    }
  }