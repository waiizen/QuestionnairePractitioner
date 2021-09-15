import { Component, OnInit } from '@angular/core';
import {PatientService} from "../Services/patient.service";
import {QuestionnaireResponseService} from "../Services/questionnaire-response.service";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {PopupViewQuestionnaire} from "../Popup/popup-view-questionnaire";
import {PopupViewQuestionnaireResponse} from "../Popup/popup-view-questionnaire-response";
import {QuestionnaireService} from "../Services/questionnaire.service";

@Component({
  selector: 'app-my-patient',
  templateUrl: './my-patient.component.html',
  styleUrls: ['./my-patient.component.scss']
})
export class MyPatientComponent implements OnInit {

  toShow: boolean = false;
  patientList : any[] = [];
  questionnaireRespList: any[] = [];

  constructor(private patientService: PatientService,
              private questionnaireRespService: QuestionnaireResponseService,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    this.patientService.getAll().subscribe(
      (elt) => {
        this.patientList = elt;
      }
    );
  }

  searchQuestionnaire(event){
    // si c'est notre patient, fake
    if(event.value == "613f4631a5b46400122cf50c"){
      this.questionnaireRespService.getAll().subscribe(
        (elt) => {
          console.log(elt);
          this.questionnaireRespList = elt;
          this.toShow = true;
        }
      );
    } else {
      this.questionnaireRespList = [];
    }
  }

  openQuestionnaire(questionnaire){
    console.log(questionnaire);
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '50%';
    dialogConfig.data = {
      questionnaire: questionnaire
    }
    this.dialog.open(PopupViewQuestionnaireResponse, dialogConfig);
  }

}
