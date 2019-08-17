import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {
 
  users={}
  constructor(public router:Router, public activa:ActivatedRoute, public data: UsersService) {
    this.users=JSON.parse(localStorage.getItem('user'))
    console.log(this.users)
    
      
  }
  
  ngOnInit() {
  }

    
}
