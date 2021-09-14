import { Component, OnInit } from '@angular/core';
import {QuestionnaireService} from "../Services/questionnaire.service";
import {Questionnaire} from "../Model/Questionnaire";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {PopupViewQuestionnaire} from "../Popup/popup-view-questionnaire";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  questionnaireList: Questionnaire[] = [];

  constructor(private questionnaireService: QuestionnaireService,
              private dialog: MatDialog) { }

  ngOnInit(): void {

    this.questionnaireService.getAll().subscribe(
      (questList) => {
        this.questionnaireList = questList;
        console.log("post");
        console.log(this.questionnaireList);
      }
    );

  }

  openQuestionnaire(questionnaire) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '50%';
    dialogConfig.data = {
      questionnaire: questionnaire
    }
    this.dialog.open(PopupViewQuestionnaire, dialogConfig);
  }

}
