import {Component, Inject} from "@angular/core";
import {FormBuilder, FormGroup} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Questionnaire} from "../Model/Questionnaire";
import {Item} from "../Model/Item";
import {QuestionnaireResponse} from "../Model/QuestionnaireResponse";
import {ItemResponse} from "../Model/ItemResponse";
import {Answer} from "../Model/Answer";

export interface DialogData{
  name: string;
}

@Component({
  selector: 'popup-view-questionnaire-response',
  templateUrl: 'popup-view-questionnaire-response.html',
})
export class PopupViewQuestionnaireResponse {

  currentQuestionnaire = new QuestionnaireResponse();
  currentQuestItems: ItemResponse[] = [];
  currentAnswer: Answer = null;

  form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<PopupViewQuestionnaireResponse>,
    @Inject(MAT_DIALOG_DATA) data) {

    this.currentQuestionnaire = data.questionnaire;
    this.currentQuestItems = this.currentQuestionnaire.item;

    console.log(this.currentQuestionnaire);
    console.log(this.currentQuestItems);

  }

  close(){
    this.dialogRef.close();
  }

}
