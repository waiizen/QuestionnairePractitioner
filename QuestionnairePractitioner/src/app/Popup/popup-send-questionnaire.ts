import {Component, Inject, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {PatientService} from "../Services/patient.service";
import {QuestionnaireService} from "../Services/questionnaire.service";
import {MatSnackBar} from "@angular/material/snack-bar";

export interface DialogData{
  name: string;
}

@Component({
  selector: 'popup-send-questionnaire',
  templateUrl: 'popup-send-questionnaire.html',
  styleUrls: ['popup.css']
})
export class PopupSendQuestionnaire implements OnInit{
  form: FormGroup;
  patientList : any[] = [];
  choixPatient: boolean = false;
  currentQuestionnaire: any;

  constructor(
    public dialogRef: MatDialogRef<PopupSendQuestionnaire>,
    private patientService: PatientService,
    @Inject(MAT_DIALOG_DATA) data,
    private questionnaireService: QuestionnaireService,
    private snackBar: MatSnackBar) {

    this.currentQuestionnaire = data.questionnaire;
  }

  ngOnInit(){
    this.patientService.getAll().subscribe(
      (elt) => {
        this.patientList = elt;
      }
    );
  }

  close(){
    this.dialogRef.close();
  }

  submit(questionnaire){
    let newQuestionnaire = questionnaire;
    newQuestionnaire.status = "active";
    this.questionnaireService.put(newQuestionnaire).subscribe(
      () => {},
      (e) => {console.error(e)},
      () => {
        this.snackBar.open('Questionnaire envoyé.');
        window.location.reload();
      }
  );
  }

  selectPatient(event){
    this.choixPatient = true;
  }

}
