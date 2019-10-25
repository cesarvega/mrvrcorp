import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' })
};

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

  getItemDatabyId(id: string): Observable<any> {
    id = 'ZP6ZTdpEPRlBlwyDPv0s';
    return this.httpClient.get(this.baseUrl + '/item/' + id);
  }

  putItemData(): Observable<any> {
    const data = {      
      id: 'ZP6ZTdpEPRlBlwyDPv0s',
      name: 'Kettle5',
      description: 'This5 kettle5 consumes5 very5 ',
      salePrice: 200,
      price: 100
    };
    return this.httpClient.put(this.baseUrl, data);
  }

  postItemData(): Observable<any> {
    const data = {
      name: 'Kettle2',
      description: 'This2 kettle2 consumes2 very2 low energy and has auto control system.',
      salePrice: 200,
      price: 100
    };

    
    return this.httpClient.post(this.baseUrl, data);
  }

  deleteItemData(id?: string): Observable<any> {
    id = 'LZ5U4ZSCe2SD6H8SheaW';
    return this.httpClient.delete('http://localhost:5001/bsgur-fdb7a/us-central1/app/' + '/item/' + id);
  }
}

