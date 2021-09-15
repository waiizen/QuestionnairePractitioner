import { Component, OnInit } from '@angular/core';
import {QuestionnaireService} from "../Services/questionnaire.service";
import {Questionnaire} from "../Model/Questionnaire";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {PopupViewQuestionnaire} from "../Popup/popup-view-questionnaire";
import {MatSnackBar, MatSnackBarConfig} from "@angular/material/snack-bar";
import {PopupSendQuestionnaire} from "../Popup/popup-send-questionnaire";

@Component({
  selector: 'app-manage-questionnaire',
  templateUrl: './manage-questionnaire.component.html',
  styleUrls: ['./manage-questionnaire.component.scss']
})
export class ManageQuestionnaireComponent implements OnInit {

  questionnaireList: Questionnaire[] = [];

  constructor(private questionnaireService: QuestionnaireService,
              private dialog: MatDialog,
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {

    this.questionnaireService.getAll().subscribe(
      (questList) => {
        this.questionnaireList = questList;
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

  deleteQuestionnaire(questionnaire){
    console.log(this.questionnaireList);
    console.log(this.questionnaireList.findIndex( (obj) => {return obj.id == questionnaire.id} ))
    this.questionnaireService.delete(questionnaire).subscribe(
      () => {},
      (e) => {console.error(e);},
      () => {
        let sbConfig = new MatSnackBarConfig();
        sbConfig.duration = 3000;
        this.snackBar.open('Questionnaire supprimé.',"", sbConfig)
        this.questionnaireList.splice(this.questionnaireList.findIndex( (obj) => {return obj.id == questionnaire.id} ), 1);
      }
    );
  }

  sendQuestionnaire(questionnaire){
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '50%';
    dialogConfig.data = {
      questionnaire: questionnaire
    }
    this.dialog.open(PopupSendQuestionnaire, dialogConfig);
  }

}
