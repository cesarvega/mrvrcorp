import { Component, OnInit } from '@angular/core';
import { FuseConfigService } from '@fuse/services/config.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SocialUser, AuthService } from 'angularx-social-login';
import { Router } from '@angular/router';
import { ContactUsExternalService } from '../../contact-us-external/contact-us-external.service';
import { LoginService } from '../login.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-tell-a-friend',
  templateUrl: './tell-a-friend.component.html',
  styleUrls: ['./tell-a-friend.component.scss']
})
export class TellAFriendComponent implements OnInit {
  reasons = ['Dr.',	'Mr.',	'Mrs.',	'Ms.', 'Prof.']; 
  fileds = ['Doctor', 'Nurse', 'Pharmacist', 'Paramedic', 'Other', 'Consumer', ]; 
  loginForm: FormGroup;
  formErrors: any;
  constructor(
    private _fuseConfigService: FuseConfigService,
    private _formBuilder: FormBuilder,
    private router: Router,    
    private toastr: ToastrService,
    private _loginService: LoginService
  ) {
    this._fuseConfigService.config = {
      layout: {
        navbar: {
          hidden: false
        },
        toolbar: {
          hidden: false
        },
        footer: {
          hidden: true
        },
        sidepanel: {
          hidden: true
        }
      }
    }; 
    
    this.formErrors = {
      email: {},
      first: {},
      last: {},
      message: {}
    };
  }

  contactUs(): void {
    const data =  {username: localStorage.getItem('userName'), email: this.loginForm.value.email, first: this.loginForm.value.first, last: this.loginForm.value.last};
    this._loginService.tellaFriend(data).subscribe(x => {
      console.log(x);
      this.toastr.success('email sent!');
      this.router.navigateByUrl('/apps/login/thankyou');
    });
  
  }
  ngOnInit(): void {
    this.loginForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      first: ['', Validators.required],
      last: ['', Validators.required],
      // tslint:disable-next-line:max-line-length
      message: [{value: `Hi,I thought you might be interested in joining the Brand Institute Panel. 
      I’m already a Member and enjoy sharing my opinion on new products, drugs and services being developed right now.
      Join the Brand Institute Panel and leave your mark on the future!Click ` +
       `<a href='https://www.brandinstitute.com/memberservices/default.aspx?curPage=home.aspx'>here</a>` + ` to register.`, disabled: true}]
    });
  }
}

