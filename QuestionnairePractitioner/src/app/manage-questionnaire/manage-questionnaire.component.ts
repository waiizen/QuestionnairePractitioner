import { Component, OnInit } from '@angular/core';
import {QuestionnaireService} from "../Services/questionnaire.service";
import {Questionnaire} from "../Model/Questionnaire";

@Component({
  selector: 'app-manage-questionnaire',
  templateUrl: './manage-questionnaire.component.html',
  styleUrls: ['./manage-questionnaire.component.scss']
})
export class ManageQuestionnaireComponent implements OnInit {

  questionnaireList: Questionnaire[] = [];

  constructor(private questionnaireService: QuestionnaireService) { }

  ngOnInit(): void {

  }

}
