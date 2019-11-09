import { Component, OnInit, HostListener } from '@angular/core';
import { FuseConfigService } from '@fuse/services/config.service';
import { MrvrService } from '../mrvr.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { environment } from 'environments/environment';
import { PaymentService } from './payment.service';
import * as firebase from 'firebase';
// import { FbService } from './fb-service.service';

import {Apollo, gql} from 'apollo-angular-boost';
 


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
  card: any;
  error: string;
  emailAddress: any;


  // stripe stuff
  handler: any;
  userId: any;
  amount = 3500;


  constructor(
    private _fuseConfigService: FuseConfigService,
    private _mrvrservice: MrvrService,
    public fb: FormBuilder,
    private paymentSvc: PaymentService,
    // private fbService: FbService,
    apollo: Apollo
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


    // Apollo

    // const allPosts = apollo.watchQuery({
    //   query: gql`
    //     query allPosts {
    //       posts {
    //         id
    //         title
    //         text
    //       }
    //     }
    //   `,
    // });
    const query = gql`
    query getBooks {
      books @rtdbQuery(ref: "/books", type: "Books") @array {
        id @key
        name
        reviews @array {
          id @key
          content
        }
      }
    }
  `;
    




  
  }


ngOnInit(): void {


   
//   const rtdbLink = createRtdbLink({
//     database: firebase.database()
//   });
   
//   const client = new ApolloClient({
//     link: rtdbLink,
//     cache: new InMemoryCache(),
//   });


//   // A simple query to retrieve data from 
// // firebase.database().ref("/profile/me")
// // @rtdbQuery stands for Realtime Database Query
// const query = gql`
// query myProfile {
//   me @rtdbQuery(ref: "/profile/me") {
//     name
//   }
// }
// `;

// // Invoke the query and log the person's name
// client.query({ query }).then(response => {
// console.log(response.data.name);
// });


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

  // stripe 
  this.handler = StripeCheckout.configure({
    key: environment.stripeKey,
    image: 'assets/images/logos/bi-logo-with-tagline.svg',
    locale: 'auto',
    token: token => {
      this.paymentSvc.processPayment(token, this.amount, localStorage.getItem('userId'))
      // .then(res =>{
      //   console.log(res);
      // })
    }
  });

  firebase.auth().signInAnonymously().catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      var isAnonymous = user.isAnonymous;
      this.userId = user.uid;
      localStorage.setItem('userId', user.uid);
      // var userRef = app.dataInfo.child(app.users);
  
      // var useridRef = userRef.child(app.userid);
  
      // useridRef.set({
      //   locations: "",
      //   theme: "",
      //   colorScheme: "",
      //   food: ""
      // });
  
    } else {
      // User is signed out.
      // ...
    }
    // ...
  });
}

handlePayment(): void {
  this.handler.open({
    name: 'AwesomeGateway',
    excerpt: 'Deposit Funds to Account',
    amount: this.amount
  });
}

@HostListener('window:popstate')
  onPopstate(): void {
    this.handler.close();
  }

//   async onSubmit(): Promise<void> {
//   console.log(this.stripeForm.value);
//   const { token, error } = await stripe.createToken(this.card, {
//     email: this.emailAddress
//   });

//   if (error) {
//     console.log('Something is wrong:', error);
//   } else {
//     console.log('Success!', token);
//     // ...send the token to the your backend to process the charge
//   }

// }


}
