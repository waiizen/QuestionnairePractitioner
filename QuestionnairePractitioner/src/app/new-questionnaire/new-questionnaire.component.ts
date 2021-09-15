import {Component, OnInit, ViewChild} from '@angular/core';

import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DatePipe} from "@angular/common";
import {Item} from "../Model/Item";
import {QuestionnaireService} from "../Services/questionnaire.service";
import {MatSnackBar, MatSnackBarConfig} from "@angular/material/snack-bar";

export interface QuestionData {
  text: string;
  linkId: string;
  type: string;
}

const ELEMENT_DATA: QuestionData[] = [
  {linkId: "1", text: 'Quel est votre taux de glycémie ? (g/L) *', type: "decimal"},
  {linkId: "2", text: 'Quel est votre taux d\'activité sportive par semaine ? (heures) *', type: "decimal"},
  {linkId: "3", text: 'Combien de crises d\'hypoglycémies et d\'hyperglycémie avez vous subit ce mois-ci ? *', type: "decimal"},
  {linkId: "4", text: 'Quel est votre poids ? (kg) *', type: "decimal"},
  {linkId: "5", text: 'Prenez vous correctement votre traitement ? *  ', type: "boolean"}
];

@Component({
  selector: 'app-new-questionnaire',
  templateUrl: './new-questionnaire.component.html',
  styleUrls: ['./new-questionnaire.component.scss']
})

export class NewQuestionnaireComponent implements OnInit {
    displayedColumns: string[] = ['name', 'action'];
    dataSource = ELEMENT_DATA;
    newQuestionId: number = 6;

    @ViewChild(MatTable,{static:true}) table: MatTable<any>;

    newQuestForm: FormGroup;

    constructor(public dialog: MatDialog,
                private formBuilder: FormBuilder,
                public datePipe: DatePipe,
                private questionnaireService: QuestionnaireService,
                private snackBar: MatSnackBar){}

    ngOnInit(){
      this.initForm();
    }

    openDialog(action,obj) {
      obj.action = action;
      const dialogRef = this.dialog.open(DialogBoxComponent, {
        width: '400px',
        data:obj
      });

      dialogRef.afterClosed().subscribe(result => {
        if(result.event == 'Ajouter'){
          this.addRowData(result.data);
        }else if(result.event == 'Modifier'){
          this.updateRowData(result.data);
        }else if(result.event == 'Supprimer'){
          this.deleteRowData(result.data);
        }
      });
    }

    addRowData(row_obj){
      var d = new Date();
      this.dataSource.push({
        linkId:this.newQuestionId.toString(),
        text:row_obj.text,
        type:"text"
      });
      this.table.renderRows();
      this.newQuestionId++;


    }
    updateRowData(row_obj){
      this.dataSource = this.dataSource.filter(
        (value,key) => {
        if(value.linkId == row_obj.linkId){
          value.text = row_obj.text;
        }
        return true;
      });
    }
    deleteRowData(row_obj){
      this.dataSource = this.dataSource.filter((value,key)=>{
        return value.linkId != row_obj.linkId;
      });
    }


  submit(){
      let dateTransform =this.datePipe.transform(this.newQuestForm.value.date, 'yyyy-MM-dd');
      this.createQuestionnaire(this.newQuestForm.value.titre, dateTransform, this.dataSource);
  }

  reset(){
    window.location.reload();
  }

  createQuestionnaire(title: string, date: string, items: QuestionData[]){
      var newQuestionnaire =
        {
          "resourceType": "Questionnaire",
          "title": title,
          "status": "draft",
          "date": date,
          "item": items
        };
      this.questionnaireService.createQuestionnaire(newQuestionnaire).subscribe(
        (elt) => {},
        (e) => console.error(e),
        () => {
          let sbConfig = new MatSnackBarConfig();
          sbConfig.duration = 3000;
          this.snackBar.open('Questionnaire enregistré.',"", sbConfig)
        }
      );
  }

  initForm(){
    this.newQuestForm = this.formBuilder.group({
      titre: ['', Validators.required],
      date: ['', Validators.required]
    })
  }

}
