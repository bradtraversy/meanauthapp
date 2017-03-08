import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {tokenNotExpired} from 'angular2-jwt';

@Injectable()
export class AuthService {
  authToken: any;
  user: any;
  isDev:boolean;

  constructor(private http:Http) {
    this.isDev = false; // Change to false before deployment
  }

  registerUser(user){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    let ep;
    if(this.isDev){
      ep = 'http://localhost:8080/users/register';
    } else {
      ep = 'users/register';
    }
    return this.http.post(ep, user,{headers: headers})
      .map(res => res.json());
  }

  authenticateUser(user){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    let ep;
    if(this.isDev){
      ep = 'http://localhost:8080/users/authenticate';
    } else {
      ep = 'users/authenticate';
    }
    return this.http.post(ep, user,{headers: headers})
      .map(res => res.json());
  }

  getProfile(){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    let ep;
    if(this.isDev){
      ep = 'http://localhost:8080/users/profile';
    } else {
      ep = 'users/profile';
    }
    return this.http.get(ep,{headers: headers})
      .map(res => res.json());
  }

  storeUserData(token, user){
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  loggedIn(){
    return tokenNotExpired();
  }

  logout(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
}
