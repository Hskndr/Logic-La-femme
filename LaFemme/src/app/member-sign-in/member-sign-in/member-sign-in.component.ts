import {Component, OnInit} from '@angular/core';
import {COUNTRIES, STATES_ARGENTINA, STATES_COLOMBIA, STATES_USA, STATES_VENEZUELA} from '../../mock/mock-country';
import {Option} from '../../models/option.model';
import {Member} from '../../class/memberClass';
import {state} from '@angular/animations';

@Component({
  selector: 'app-member-sign-in',
  templateUrl: './member-sign-in.component.html',
  styleUrls: ['./member-sign-in.component.css']
})
export class MemberSignInComponent implements OnInit {
  public formHidden = false;

  public typeRelation: Option[];
  public member: Member;
  public members: Member[];

  /* countries and states mock */
  countries = COUNTRIES;
  statesUsa = STATES_USA;
  statesArg = STATES_ARGENTINA;
  statesCol = STATES_COLOMBIA;
  statesVen = STATES_VENEZUELA;

  /*Calculate age*/
  CalculateAge() {
  }

  constructor() {
  }

  public ngOnInit() {
    this.typeRelation = [
      {id: 0, description: 'Attached Male Seeking Females'},
      {id: 1, description: 'Attached Female Seeking Males'},
      {id: 2, description: 'Male Seeking Males'},
      {id: 3, description: 'Female Seeking Females'},
      {id: 4, description: 'Sugar Daddies Seeking Females'},
      {id: 5, description: 'Female Seeking Sugar Daddies'},
      {id: 6, description: 'Sugar Mommies Seeking Males'},
      {id: 7, description: 'Male Seeking Sugar Mommies'}
    ];

    this.member = {
      id: 1,
      name: '',
      lastName: '',
      age: 0,
      zodiacSign: '',
      bodyType: '',
      height: '',
      weight: '',
      eyes: '',
      hairColor: '',
      hairLength: '',
      raceEthnic: '',
      tattoos: '',
      locatedIn: '',
      numContact: 0,
      typeRelation: 0,
      invitationCode: 100,
      password: '',
      country: '',
      state: '',
      postalZipCode: '',
      dateOfBirth: '',
      email: '',
  }
    ;
    this.members = [];

  }

}
