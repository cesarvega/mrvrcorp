import { Component, OnInit, ViewEncapsulation, HostListener, NgZone } from '@angular/core';
import { FuseConfigService } from '@fuse/services/config.service';
import { MrvrService } from '../mrvr.service';
import { fuseAnimations } from '@fuse/animations';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { trigger, state, style, transition, animate, group, query, stagger } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  animations: [
    trigger('Fade1', [

      // the "in" style determines the "resting" state of the element when it is visible.
      state('in', style({
        width: 10,
        transform: 'translateX(-100px)',
         opacity: 1
      })),
      // fade in when created. this could also be written as transition('void => *')
      transition(':enter', [
        style({
          width: 120,
          transform: 'translateX(100px)',
           opacity: 0
        }),
        
        animate('3s cubic-bezier(0.35, 0, 0.25, 1)')
      ]),

      // fade out when destroyed. this could also be written as transition('void => *')
      transition(':leave',
        animate('3s cubic-bezier(0.35, 0, 0.25, 1)', style({
          width: 10,
          transform: 'translateX(-100px)',
          opacity: 0
        })))
    ])
  ],
})
export class ProductsComponent implements OnInit {
 
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
  showText = false;
  globalCounter = 0;
  animationSTate = 'in';
  mainImage = [
    { image: 'assets/images/slide0.jpg', top: 'Absolute Of Excellent', bottom: ' Tabaccos' },
    { image: 'assets/images/slide1.jpg', top: 'One stop source for', bottom: 'Premium Cigars' },
    { image: 'assets/images/slide2.jpg', top: 'Absolute the best store to', bottom: 'Go for Cigars' },
    { image: 'assets/images/slide3.jpg', top: 'Cigars you', bottom: 'Will Love' },
    { image: 'assets/images/slide5.jpg', top: 'Absolute source of', bottom: 'Great Cigars' },
    { image: 'assets/images/slide6.jpg', top: 'Shop', bottom: 'Great Cigars' },
    { image: 'assets/images/slide7.jpg', top: 'A Wide Range of ', bottom: 'Premium Cigars' },
    { image: 'assets/images/slide11.jpg', top: 'You Will Love', bottom: 'Our Cigars' },
    { image: 'assets/images/slide8.jpg', top: 'The Cigars Wiht', bottom: ' Most Flavor' }];
  isGlowing = true;
  

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
    this.topOverlay = this.mainImage[3].top;
    this.bottomOverlay = this.mainImage[3].bottom;

    let counter = 0;
    setTimeout(() => {
    this.isGlowing = false;
    }, 2000);
    setInterval(() => {
      if (counter === 9) {
        counter = 0;
      }

      setTimeout(() => {
      
        this.showText = !this.showText;
        counter++;
      }, 200);

      this.showText = !this.showText;
      this.selectedImage = this.mainImage[counter].image;
      this.topOverlay = this.mainImage[counter].top;
      this.bottomOverlay = this.mainImage[counter].bottom;
      

    }, 5000);
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

  nextSlide(): void {
    if (this.globalCounter === 9) {
      this.globalCounter = 0;
    }
    this.selectedImage = this.mainImage[this.globalCounter].image;
    this.topOverlay = this.mainImage[this.globalCounter].top;
    this.bottomOverlay = this.mainImage[this.globalCounter].bottom;
    this.globalCounter++;
  }
  navigateMenu(menuRoute): void {
    this.router.navigate(['/' + menuRoute]);
    console.log(event);
  }


}
