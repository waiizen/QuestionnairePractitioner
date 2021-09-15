import { Component, OnInit } from '@angular/core';
import {QuestionnaireService} from "../Services/questionnaire.service";
import {Questionnaire} from "../Model/Questionnaire";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {PopupViewQuestionnaire} from "../Popup/popup-view-questionnaire";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

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
        this.snackBar.open('Questionnaire supprimé.');
        this.questionnaireList.splice(this.questionnaireList.findIndex( (obj) => {return obj.id == questionnaire.id} ), 1);
      }
    );
  }

}
