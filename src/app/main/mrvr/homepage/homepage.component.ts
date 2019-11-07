import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FuseConfigService } from '@fuse/services/config.service';
import { MrvrService } from '../mrvr.service';
import { fuseAnimations } from '@fuse/animations';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  reasons = ['Survey Technical Questions/Comments', 'Payment Questions',
    'Website Questions/Comments', 'Profile/Registration Questions Comments', 'Change Username'];
  stripeForm: FormGroup;
  formErrors: any;
  card: any;
  error: string;
  emailAddress: any;
  constructor(
    private _fuseConfigService: FuseConfigService,
    private _mrvrservice: MrvrService,
    public fb: FormBuilder
  ) {
    // Configure the layout
    this._fuseConfigService.config = {
      layout: {
        navbar: {
          hidden: true
        },
        toolbar: {
          hidden: true
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
      senderName: {},
      emailFrom: {},
      amount: {},
      cardNumber: {},
      expDate: {},
      ccv: {},
      zipcode: {},
      billingAddress: {},
      TypeOfInquiry: {},
      SurveyName: {},
    };

  }


  ngOnInit(): void {
    this.stripeForm = this.fb.group({
      senderName: ['cesar', [Validators.required, Validators.minLength(4)]],
      emailFrom: ['cvega@gmail.com', [Validators.required, Validators.email]],
      amount: ['13', [Validators.required, Validators.minLength(5)]],
      cardNumber: ['4242424242424242', [Validators.required, Validators.minLength(5)]],
      expDate: ['07 23', [Validators.required, Validators.minLength(5)]],
      ccv: ['143', [Validators.required, Validators.minLength(5)]],
      zipcode: ['33131', [Validators.required, Validators.minLength(5)]],
      billingAddress: ['201 SE 2 ave', [Validators.required, Validators.minLength(5)]],
      TypeOfInquiry: ['', Validators.required],
      SurveyName: [''],
    });
  }

  async onSubmit(): Promise<void> {
    console.log(this.stripeForm.value);
    const { token, error } = await stripe.createToken(this.card, {
      email: this.emailAddress
    });

    if (error) {
      console.log('Something is wrong:', error);
    } else {
      console.log('Success!', token);
      // ...send the token to the your backend to process the charge
    }
  }
}
