import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-loginadmin',
  templateUrl: './loginadmin.component.html',
  styleUrls: ['./loginadmin.component.css']
})
export class LoginadminComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
   login(name:string, password:string){
    if(name=="admin" && password=="admin"){
      this.router.navigate(['app-menu']);
    }
  }
}
