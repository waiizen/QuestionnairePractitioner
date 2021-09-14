import {Component} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";

export interface DialogData{
  name: string;
}

@Component({
  selector: 'popup-info-practitioner',
  templateUrl: 'popup-info-practitioner.html',
})
export class PopupInfoPractitioner {
  form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<PopupInfoPractitioner>) {
  }

  close(){
    this.dialogRef.close();
  }

}
