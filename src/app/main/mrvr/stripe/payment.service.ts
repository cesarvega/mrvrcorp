import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  userId: string;

  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth) {
    // this.afAuth.authState.subscribe((auth) => {
    //   if (auth) this.userId = 'asdlaksjdlaksjdlaskdj'
    //   // if (auth) this.userId = auth.uid
    // });
    
  }


   processPayment(token: any, amount: number, userId : any) {
     const payment = { token, amount }
     return this.db.list(`/payments/${userId}`).push(payment)
   }
}
