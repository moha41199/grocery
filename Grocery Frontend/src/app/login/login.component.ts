import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  login(name:string, password:string){
    if(name=="admin" && password=="admin"){
      this.router.navigate(['app-menu']);
    }else{
      this.router.navigate(['shop']);
    }
  }

}
