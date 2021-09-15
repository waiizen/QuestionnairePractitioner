import { Component, OnInit } from '@angular/core';
import counterUp from 'counterup2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  nbHopital: number = 832;
  nbPractitien: number = 1392;

  ngOnInit(): void {
    const el = document.querySelector( '.counter' );
    const el2 = document.querySelector( '.counter2' );

    counterUp( el, {
      duration: 3000,
      delay: 16,
    } );
    counterUp( el2  , {
      duration: 3000,
      delay: 16,
    } );
  }
}
