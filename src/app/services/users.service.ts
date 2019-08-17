import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  ruta = "https://randomuser.me/api/" 
  
  constructor(public http:HttpClient) { }
  user: {};
  getUsers(cant, gender){
    console.log(cant, gender);
    this.user = this.http.get(this.ruta + `?results=${cant}&gender=${gender}`)
    return this.user 
 }

//  getUser(){
//    return this.user
//  }

}
