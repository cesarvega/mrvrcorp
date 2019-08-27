import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  // protected API_URL = 'http://localhost:64378/api/Files/UploadFile';
  // protected API_URL = 'https://tools.brandinstitute.com/webservicePanel/wsPanel.asmx';
  // protected API_URL = 'http://localhost:55833/wsPanel.asmx';
  // protected API_URL = 'http://localhost/wsPanelMembers/wsPanel.asmx';
  protected API_URL = 'https://tools.brandinstitute.com/wsPanelMembers/wsPanel.asmx';
  imageToShow: any;
  isImageLoading: any;
  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'multipart/form-data'
    })
  };
  constructor(private httpClient: HttpClient) {}

 // get  all Infos 
  getInfos(): Observable<any> {
    return this.httpClient.get(`${this.API_URL}`);
  }

  // get Info by id
  getInfo(id: string): Observable<any> {
    const url = `${this.API_URL}/edit/${id}`;
    return this.httpClient.get(url);
  }

  postInfo(data: any): Observable<any> {
    const userName  =  localStorage.getItem('userName');
    const url = `${this.API_URL}/UploadImage`;
    const formData: FormData = new FormData();
    formData.append('Image', data, data.name);
    formData.append('username', userName);    
    formData.append('type', data.type);    
    formData.append('name', data.name);    
    return this.httpClient.post<any>(url, formData);
  }
  
  getDocuments(username: string): Observable<any> {
    const bodyString = { username: username};
    const url = `${this.API_URL}/Get__File`;
    return this.httpClient.post(url, bodyString);
  }
  
  createImageFromBlob(image: Blob): void {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
       this.imageToShow = reader.result;
    }, false);
 
    if (image) {
       reader.readAsDataURL(image);
    }
 }

  // update Infos by id 
  // remplazar any por el tipo de variable para esto creamos un modeloose aun clase que represente eld ata que vamos update
  updateInfo(id: string,  data: any): Observable<any> {
    const url = `${this.API_URL}/update/${id}`;
    return this.httpClient.post(url, data);
  }

  deleteDocument(docId: any): Observable<any> {
    const url = `${this.API_URL}/delete_image`;
    const userName  =  localStorage.getItem('userName');
    const bodyString = { username: userName, docId: docId};
    return this.httpClient.post(url, bodyString);
  }

  // borrar appoinmnets 
  deleteInfo(id: string): Observable<{}> {
    const url = `${this.API_URL}/delete/${id}`;
    return this.httpClient.get(url);
  }
}

