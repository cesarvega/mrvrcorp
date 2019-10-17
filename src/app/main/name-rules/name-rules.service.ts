import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NameRulesService {


  // tslint:disable-next-line:variable-name
  protected addWordpartsAndRationalesURL = 'https://tools.brandinstitute.com/wsPanelMembers/wsPanel.asmx/addWordpartsAndRationales';
  protected deleteWordpartsAndRationalesURL = 'https://tools.brandinstitute.com/wsPanelMembers/wsPanel.asmx/deleteRationales';
  protected deleteWordpartURL = 'https://tools.brandinstitute.com/wsPanelMembers/wsPanel.asmx/deleteWordparts';
  protected updateWordpartURL = 'https://tools.brandinstitute.com/wsPanelMembers/wsPanel.asmx/updateWordPart';
  protected getWordpartsAndRationalesURL = 'https://tools.brandinstitute.com/wsPanelMembers/wsPanel.asmx/getWordpartsAndRationales';
  protected addRecraftURL = 'https://tools.brandinstitute.com/wsPanelMembers/wsPanel.asmx/AddRecraftNames';
  protected updateRecraftURL = 'https://tools.brandinstitute.com/wsPanelMembers/wsPanel.asmx/updateRecraftNames';
  protected deleteRecraftURL = 'https://tools.brandinstitute.com/wsPanelMembers/wsPanel.asmx/deleteRecraftNames';
  protected getRecraftURL = 'https://tools.brandinstitute.com/wsPanelMembers/wsPanel.asmx/GetRecraftNames';
  protected setMinAndMaxURL = 'https://tools.brandinstitute.com/wsPanelMembers/wsPanel.asmx/setMinAndMax';
  protected getPOCAResultsURL = 'https://tools.brandinstitute.com/wsPanelMembers/wsPanel.asmx/getPOCAResults';
  protected getSetMandatoryURL = 'https://tools.brandinstitute.com/wsPanelMembers/wsPanel.asmx/getSetMandatory';
  protected getSetAgencyURL = 'https://tools.brandinstitute.com/wsPanelMembers/wsPanel.asmx/getSetAgency';
  protected runScriptPerBNRSURL = 'https://tools.brandinstitute.com/wsPanelMembers/wsPanel.asmx/runScriptPerBNRS';
  // protected runScriptPerBNRSURL = 'http://localhost:55833/wsPanel.asmx/runScriptPerBNRS';
  // protected getSetAgencyURL = 'http://localhost:55833/wsPanel.asmx/getSetAgency';
  // protected getSetMandatoryURL = 'http://localhost:55833/wsPanel.asmx/getSetMandatory';
  // protected getPOCAResultsURL = 'http://localhost:55833/wsPanel.asmx/getPOCAResults';
  // protected getWordpartsAndRationalesURL = 'http://localhost:55833/wsPanel.asmx/getWordpartsAndRationales';
  // protected addWordpartsAndRationalesURL = 'http://localhost:55833/wsPanel.asmx/addWordpartsAndRationales';
  // protected deleteWordpartsAndRationalesURL = 'http://localhost:55833/wsPanel.asmx//deleteRationales';
  // protected deleteWordpartURL = 'http://localhost:55833/wsPanel.asmx/deleteWordparts';
  // protected updateWordpartURL = 'http://localhost:55833/wsPanel.asmx/updateWordPart';
  // protected updateRecraftURL = 'http://localhost:55833/wsPanel.asmx/updateRecraftNames';
  // protected addRecraftURL = 'http://localhost:55833/wsPanel.asmx/AddRecraftNames';
  // protected deleteRecraftURL = 'http://localhost:55833/wsPanel.asmx/deleteRecraftNames';
  // protected getRecraftURL = 'http://localhost:55833/wsPanel.asmx/GetRecraftNames';
  // protected setMinAndMaxURL = 'http://localhost:55833/wsPanel.asmx/setMinAndMax';

  constructor(private httpClient: HttpClient) { }
  handleError;
  ProjectID;
  setProjectId(projectId): void {
    this.ProjectID = projectId;
  }

  getWordpartsAndRationales(): Observable<any> {
    const data = {
      ProjectID: this.ProjectID
    };
    return this.httpClient.post(this.getWordpartsAndRationalesURL, data);
  }

  // register un nuevo User 
  addRationalesAndWordParts(rationales, wordparts): Observable<any> {
    const data = {
      ProjectID: this.ProjectID,
      Rationales: rationales,
      WordParts: wordparts,
    };
    return this.httpClient.post(this.addWordpartsAndRationalesURL, data);
  }

  updateWordpart(Rationales: string, WordPart: any): Observable<any> {
    const data = {
      ProjectID: this.ProjectID,
      Rationales: Rationales,
      WordParts: WordPart.wp.wp,
      option: WordPart.option,
      check: WordPart.check.toString()
    };
    return this.httpClient.post(this.updateWordpartURL, data);
  }

  deleteRationalesAndWordParts(Rationales: string, WordPart: string): Observable<any> {
    const data = {
      ProjectID: this.ProjectID,
      Rationales: Rationales,
      WordParts: WordPart
    };
    return this.httpClient.post(this.deleteWordpartsAndRationalesURL, data);
  }

  deleteWordPart(Rationale: string, WordPart: string): Observable<any> {
    const data = {
      ProjectID: this.ProjectID,
      Rationales: Rationale,
      WordParts: WordPart
    };
    return this.httpClient.post(this.deleteWordpartURL, data);
  }

  getRecrafts(): Observable<any> {
    // tslint:disable-next-line:max-line-length
    const res = `[
      { "recraft": "safety",
        "DL": true,
        "DP": true,
        "DS": true,
        "DLLP": true,
        "Scramble": true
      },
      { "recraft": "innovation",
        "DL": true,
        "DP": true,
        "DS": true,
        "DLLP": true,
        "Scramble": true
      },
      { "recraft": "toxic",
        "DL": true,
        "DP": true,
        "DS": true,
        "DLLP": true,
        "Scramble": true
      },
      { "recraft": "general",
        "DL": true,
        "DP": true,
        "DS": true,
        "DLLP": true,
        "Scramble": true
      },
      { "recraft": "health",
        "DL": true,
        "DP": true,
        "DS": true,
        "DLLP": true,
        "Scramble": true
      }
    ]`;
    const data = {
      ProjectID: this.ProjectID
    };
    return this.httpClient.post(this.getRecraftURL, data);
    
  }

  addRecraft(recraft): Observable<any> {
    const data = {
      ProjectID: this.ProjectID,
      name: recraft,
    };
    return this.httpClient.post(this.addRecraftURL, data);
  }

  updateRecraft(option, $event, recraft): Observable<any> {
    const data = {
      ProjectID: this.ProjectID,
      name: recraft,
      option: option,
      value: $event.checked.toString()
    };
    return this.httpClient.post(this.updateRecraftURL, data);
  }

  deleteRecraft(recraft): Observable<any> {
    const data = {
      ProjectID: this.ProjectID,
      name: recraft,
    };
    return this.httpClient.post(this.deleteRecraftURL, data);
  }

  setMinAndMax(min, max): Observable<any> {
    const data = {
      ProjectID: this.ProjectID,
      Minimum :  min,
      Maximum :  max
    };
    return this.httpClient.post(this.setMinAndMaxURL, data);
  }

  getPOCAResults(): Observable<any> {
    const data = {
      ProjectID: this.ProjectID,
    };
    return this.httpClient.post(this.getPOCAResultsURL, data);
  }

  getSetMandatory(check, rationale): Observable<any> {
    const data = {
      ProjectID: this.ProjectID,
      rationale: rationale,
      check: check
    };
    return this.httpClient.post(this.getSetMandatoryURL, data);
  }

  getSetAgency(check, agency): Observable<any> {
    const data = {
      ProjectID: this.ProjectID,
      agency: agency,
      check: check
    };
    return this.httpClient.post(this.getSetAgencyURL, data);
  }

  runScriptPerBNRS(): Observable<any> {
    const data = {};
    return this.httpClient.post(this.runScriptPerBNRSURL, data);
  }
}
