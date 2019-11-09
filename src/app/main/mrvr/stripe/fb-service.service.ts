import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FbService {

  constructor() {
    firebase.initializeApp(environment.firebaseConfig);
}
}
