import { Injectable } from '@angular/core';
import {Questionnaire} from "../Model/Questionnaire";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private url = "https://fhir.eole-consulting.io/api/patient";

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<any[]>(this.url);
  }

}
