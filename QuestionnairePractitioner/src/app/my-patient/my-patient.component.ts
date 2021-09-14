import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-patient',
  templateUrl: './my-patient.component.html',
  styleUrls: ['./my-patient.component.scss']
})
export class MyPatientComponent implements OnInit {

  patientList = [
    {'nom': 'Marc', 'id': 1},
    {'nom': 'Jean', 'id': 2}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
