import {Component, Inject} from "@angular/core";
import {FormBuilder, FormGroup} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Questionnaire} from "../Model/Questionnaire";
import {Item} from "../Model/Item";

export interface DialogData{
  name: string;
}

@Component({
  selector: 'popup-view-questionnaire',
  templateUrl: 'popup-view-questionnaire.html',
})
export class PopupViewQuestionnaire {

  currentQuestionnaire = new Questionnaire;
  currentQuestItems: Item[] = [];

  form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<PopupViewQuestionnaire>,
    @Inject(MAT_DIALOG_DATA) data) {

    this.currentQuestionnaire = data.questionnaire;
    this.currentQuestItems = this.currentQuestionnaire.item;


  }

  close(){
    this.dialogRef.close();
  }

}
