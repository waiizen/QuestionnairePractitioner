import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Questionnaire} from "../Model/Questionnaire";

@Injectable({
  providedIn: 'root'
})
export class QuestionnaireService {

  private url = "https://fhir.eole-consulting.io/api/questionnaire";

  constructor(private http: HttpClient) { }

  getAll(){
    console.log("getAll");
    return this.http.get<Questionnaire[]>("https://fhir.eole-consulting.io/api/questionnaire");
  }

}
