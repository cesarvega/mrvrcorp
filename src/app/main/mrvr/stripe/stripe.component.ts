import { Component, OnInit } from '@angular/core';
import { FuseConfigService } from '@fuse/services/config.service';
import { MrvrService } from '../mrvr.service';
import { FormControl, FormGroup, Validators, FormGroupDirective, NgForm, FormBuilder } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';
/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-stripe',
  templateUrl: './stripe.component.html',
  styleUrls: ['./stripe.component.scss']
})
export class StripeComponent implements OnInit {
  reasons = ['Survey Technical Questions/Comments', 'Payment Questions', 
  'Website Questions/Comments', 'Profile/Registration Questions Comments', 'Change Username']; 
  stripeForm: FormGroup;
  formErrors: any;
  constructor(
    private _fuseConfigService: FuseConfigService,
    private _mrvrservice: MrvrService,
    public fb: FormBuilder
  ) {
    // Configure the layout
    this._fuseConfigService.config = {
      layout: {
        navbar: {
          hidden: false
        },
        toolbar: {
          hidden: false
        },
        footer: {
          hidden: false
        },
        sidepanel: {
          hidden: false
        }
      }
    };

    this.formErrors = {
      emailFrom: {},
      Message: {},
      TypeOfInquiry: {},
      SurveyName: {},
      senderName: {}
    };
  
  }


ngOnInit(): void {
  this.stripeForm = this.fb.group({
    emailFrom: ['cvega@gmail.com', [Validators.required, Validators.email]],
    TypeOfInquiry: ['', Validators.required],
    SurveyName: [''],
    senderName: ['cesar', [Validators.required, Validators.minLength(4)]],
    Message: ['heloo world', [Validators.required, Validators.minLength(5)]]
  });
}

onSubmit(): void {
  console.log(this.stripeForm.value);

}


}
