import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';
import { UserServiceService } from '../../services/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // public users: User[];
  // public user: User;

  constructor(private user$: UserServiceService) { }

  ngOnInit(): void {
    try {
      this.user$.login().subscribe(users=>{
        // this.user=users;
        // console.log(this.users);
      })
    } catch (e) {
      console.log(e)
    }
  }

}
