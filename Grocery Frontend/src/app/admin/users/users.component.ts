import { Component, OnInit } from '@angular/core';
import { User } from '../../model/User';
import{ActivatedRoute,Router} from '@angular/router';
import { HttpClientService } from '../../service/http-client.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: Array<User>;
  selectedUser:User;
  action:string;
  constructor(private HttpClientService:HttpClientService,private router: Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.refreshData();
  }
refreshData(){
  console.log('Test');
this.HttpClientService.getUsers().subscribe(
  response => this.handleSuccessfulResponse(response),
  );
    this.activatedRoute.queryParams.subscribe(
      (params)=>{
        this.action=params['action']
        const selectedUserId = params['id'];
        if(selectedUserId){
          this.selectedUser=this.users.find(user => user.id === +selectedUserId);
        }
    }
    );
  }
   viewUser(id: number){
      this.router.navigate(['admin','users'],{queryParams: {id,action: 'view'}});
    }
     addUser(){
      this.selectedUser=new User();
      this.router.navigate(['admin','users'],{queryParams:{action:'add'}});
}
    handleSuccessfulResponse(response){
      this.users=response;
    }
   
   
}


