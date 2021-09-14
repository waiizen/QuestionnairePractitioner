import { Component, OnInit } from '@angular/core';
import {QuestionnaireService} from "../Services/questionnaire.service";
import {Questionnaire} from "../Model/Questionnaire";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {PopupViewQuestionnaire} from "../Popup/popup-view-questionnaire";

@Component({
  selector: 'app-manage-questionnaire',
  templateUrl: './manage-questionnaire.component.html',
  styleUrls: ['./manage-questionnaire.component.scss']
})
export class ManageQuestionnaireComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


}
