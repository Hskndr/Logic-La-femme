import { Component, OnInit } from '@angular/core';
import {COUNTRIES, STATES_ARGENTINA, STATES_COLOMBIA, STATES_USA, STATES_VENEZUELA} from '../../mock/mock-country';

@Component({
  selector: 'app-member-sign-in',
  templateUrl: './member-sign-in.component.html',
  styleUrls: ['./member-sign-in.component.css']
})
export class MemberSignInComponent implements OnInit {
  /* countries and states mock */
  countries = COUNTRIES;
  statesUsa = STATES_USA;
  statesArg = STATES_ARGENTINA;
  statesCol = STATES_COLOMBIA;
  statesVen = STATES_VENEZUELA;

  /*Calculate age*/
  CalculateAge() {}
  constructor() { }

  ngOnInit() {
  }

}
