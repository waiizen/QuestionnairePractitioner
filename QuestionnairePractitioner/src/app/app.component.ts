import { Component } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {PopupInfoPractitioner} from "./Popup/popup-info-practitioner";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'QuestionnairePractitioner';

  constructor(public dialog: MatDialog) {
  }

  onConsultInfoPractitioner() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;

    const dialogRef = this.dialog.open(PopupInfoPractitioner, dialogConfig);

  }

}
