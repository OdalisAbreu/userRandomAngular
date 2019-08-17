import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  usuarios = []
  cantidad = ''
  gender = ''
  constructor(public data:UsersService) { }
  users={}

  ngOnInit() {
  }
  solicitar() {
    console.log(this.cantidad)
    this.data.getUsers(this.cantidad, this.gender).subscribe(data=>{
    this.users=data
    console.log(data);
  });
  }

  send(item){
    localStorage.setItem('user', JSON.stringify(item))
  }
}
