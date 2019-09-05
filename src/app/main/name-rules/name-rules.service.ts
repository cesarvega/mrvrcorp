import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NameRulesService {


  // tslint:disable-next-line:variable-name
  // protected addWordpartsAndRationalesURL = 'https://tools.brandinstitute.com/wsPanelMembers/wsPanel.asmx/addWordpartsAndRationales';
  public addWordpartsAndRationalesURL = 'http://localhost:55833/wsPanel.asmx/addWordpartsAndRationales';

  constructor(private httpClient: HttpClient) { }
  handleError;
  ProjectID;
  setProjectId(projectId): void {
    this.ProjectID = projectId;
  }
  // register un nuevo User 
  addRationalesAndWordParts(Rationales: string, WordPart: string): Observable<any> {
    const data = {
      ProjectID: this.ProjectID,
      Rationales: Rationales,
      WordParts: WordPart
    };
    return this.httpClient.post(this.addWordpartsAndRationalesURL, data);
  }

}
