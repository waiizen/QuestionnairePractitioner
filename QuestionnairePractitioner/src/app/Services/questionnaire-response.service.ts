import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class QuestionnaireResponseService {

  private url = "https://fhir.eole-consulting.io/api/questionnaire-response";

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<any[]>(this.url);
  }

}
