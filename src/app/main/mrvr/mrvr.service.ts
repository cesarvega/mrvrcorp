import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MrvrService {

  // baseUrl = 'https://us-central1-bsgur-fdb7a.cloudfunctions.net/app/';
  baseUrl = 'http://localhost:5001/bsgur-fdb7a/us-central1/app';
  constructor(private httpClient: HttpClient) { }


  getItemData(): Observable<any> {
    return this.httpClient.get(this.baseUrl);
  }
}
