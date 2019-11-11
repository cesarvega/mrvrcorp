import { Component, OnInit, ViewEncapsulation, HostListener, NgZone } from '@angular/core';
import { FuseConfigService } from '@fuse/services/config.service';
import { MrvrService } from '../mrvr.service';
import { fuseAnimations } from '@fuse/animations';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { trigger, state, style, transition, animate, group } from '@angular/animations';
import { count } from 'rxjs/operators';
import { Router } from '@angular/router';
import { log } from 'util';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  animations: [
    trigger('simpleFadeAnimation', [

      // the "in" style determines the "resting" state of the element when it is visible.
      state('in', style({ opacity: 1 })),

      // fade in when created. this could also be written as transition('void => *')
      transition(':enter', [
        style({ opacity: 0 }),
        animate(1000)
      ]),

      // fade out when destroyed. this could also be written as transition('void => *')
      transition(':leave',
        animate(1000, style({ opacity: 0 })))
    ])
  ],
})
export class HomepageComponent implements OnInit {

  reasons = ['Survey Technical Questions/Comments', 'Payment Questions',
    'Website Questions/Comments', 'Profile/Registration Questions Comments', 'Change Username'];

  featuredProducts = ['Survey Technical Questions/Comments', 'Payment Questions',
    'Website Questions/Comments'];
  stripeForm: FormGroup;
  formErrors: any;
  card: any;
  error: string;
  emailAddress: any;
  selectedImage: any;
  topOverlay: any;
  bottomOverlay: any;
  sticky = false;
  booleanFromComponentClass = true;
  mainImage = [
    { image: 'assets/images/slide0.jpg', top: 'A Wide RangE Of ', bottom: 'Excellent Tabaccos' },
    { image: 'assets/images/slide1.jpg', top: 'One stop source for', bottom: 'premium cigars' },
    { image: 'assets/images/slide2.jpg', top: 'the best store', bottom: 'to go for cigars' },
    { image: 'assets/images/slide3.jpg', top: 'Cigars you', bottom: 'Will Love' },
    { image: 'assets/images/slide5.jpg', top: 'A source of', bottom: 'Great Cigars' },
    { image: 'assets/images/slide6.jpg', top: 'Shop', bottom: 'Truly great cigars' },
    { image: 'assets/images/slide7.jpg', top: 'A Wide Range', bottom: 'of Premium Cigars' },
    { image: 'assets/images/slide8.jpg', top: 'The Cigars', bottom: 'Wiht Most Flavor' }];

  constructor(
    private _fuseConfigService: FuseConfigService,
    private _mrvrservice: MrvrService,
    public fb: FormBuilder,
    private router: Router
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

  hideSuccessMessage = false;

  FadeOutSuccessMsg() {
    setTimeout(() => {
      this.hideSuccessMessage = true;
    }, 10000);
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

    this.selectedImage = this.mainImage[0].image;
    this.topOverlay = this.mainImage[0].top;
    this.bottomOverlay = this.mainImage[0].bottom;
    let counter = 0;
    setInterval(() => {
      this.booleanFromComponentClass = !this.booleanFromComponentClass;
      if (counter === 8) {
        counter = 0;
      }
      this.selectedImage = this.mainImage[counter].image;
      setTimeout(() => {
        this.topOverlay = this.mainImage[counter].top;
        setTimeout(() => {
          this.bottomOverlay = this.mainImage[counter].bottom;
          counter++;
        }, 300);
      }, 500);
      this.booleanFromComponentClass = !this.booleanFromComponentClass;

    }, 2000);

    // this.FadeOutSuccessMsg();
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

  navigateMenu(event): void {
    this.router.navigate(['/products']);
    console.log(event);

  }
}
