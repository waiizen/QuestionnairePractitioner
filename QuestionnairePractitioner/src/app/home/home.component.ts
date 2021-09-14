import { Component, OnInit } from '@angular/core';
import {QuestionnaireService} from "../Services/questionnaire.service";
import {Questionnaire} from "../Model/Questionnaire";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  questionnaireList: Questionnaire[] = [];

  constructor(private questionnaireService: QuestionnaireService) { }

  ngOnInit(): void {

    this.questionnaireService.getAll().subscribe(
      (questList) => {
        this.questionnaireList = questList;
        console.log("post");
        console.log(this.questionnaireList);
      }
    );

  }

}
