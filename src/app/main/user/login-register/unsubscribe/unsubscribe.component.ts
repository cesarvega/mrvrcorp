import { Component, OnInit } from '@angular/core';
import { FuseConfigService } from '@fuse/services/config.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SocialUser, AuthService } from 'angularx-social-login';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-unsubscribe',
  templateUrl: './unsubscribe.component.html',
  styleUrls: ['./unsubscribe.component.scss']
})
export class UnsubscribeComponent implements OnInit {
  loginForm: FormGroup;
  private user: SocialUser;
  formErrors: any;
  reasons = ['Lack of surveys', 'I do not have the time', 'Compensation too low', 'Other -- please specify']; 
  
  constructor(
    private _fuseConfigService: FuseConfigService,
    private _formBuilder: FormBuilder,    
    private _loginService: LoginService,
    private toastr: ToastrService,
    private router: Router
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
      username: {},
      reason: {},
      message: {}    
    };
  }

  unsubscribe(): void {
    if (this.loginForm.value.message === '') {
      this.loginForm.value.message = '  ';
    }
    this._loginService.unsubscribe(this.loginForm.value).subscribe(x => {        
      this.toastr.success('email sent');
          this.router.navigateByUrl('/apps/login/thankyou');
  }); 
  }

  ngOnInit(): void {
    this.loginForm = this._formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      reason: ['', Validators.required],
      message: ['']
    });
  }

}
