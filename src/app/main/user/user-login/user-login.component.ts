import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/main/core/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  user;
  constructor(public auth: AuthService) { }

  ngOnInit(): void {
     this.user  =  this.auth.user$;
  }

}
