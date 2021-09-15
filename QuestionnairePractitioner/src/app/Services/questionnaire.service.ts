import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Questionnaire} from "../Model/Questionnaire";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class QuestionnaireService {

  private url = "https://fhir.eole-consulting.io/api/questionnaire";

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<Questionnaire[]>(this.url);
  }

  createQuestionnaire(questionnaire: any): Observable<any>{
    const headers = { 'content-type': 'application/json'};
    const body = JSON.stringify(questionnaire);
    return this.http.post(this.url,body,{'headers':headers , observe: 'response'});
  }

  delete(questionnaire): Observable<any>{
    return this.http.delete(this.url + "/" + questionnaire.id);
  }

}
