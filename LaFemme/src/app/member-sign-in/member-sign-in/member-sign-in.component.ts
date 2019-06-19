import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {MemberRegisterService} from '../../services/member-register.service';

import {Option} from '../../models/option.model';

import {COUNTRIES, STATES_ARGENTINA, STATES_COLOMBIA, STATES_USA, STATES_VENEZUELA} from '../../mock/mock-country';


@Component({
  selector: 'app-member-sign-in',
  templateUrl: './member-sign-in.component.html',
  styleUrls: ['./member-sign-in.component.css']
})
export class MemberSignInComponent implements OnInit {

  memberRegisterForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private memberRegisterService: MemberRegisterService,
    private router: Router) {
    this.memberRegisterForm = this.fb.group({

      userName: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(1000)])],
      typeRelation: ['', Validators.required],
      invitationCode: ['', Validators.required],
      country: ['', Validators.required],
      state: ['', Validators.required],
      postalZipCode: ['', Validators.required],

      /*

          dateOfBirth: ['', Validators.required],
          age: ['', Validators.required],
          raceEthnic: ['', Validators.required],
          */

      /* lookingFor: ['', Validators.required],
       bodyType: ['', Validators.required],
       height: ['', Validators.required],
       weight: ['', Validators.required],
       eyesColor: ['', Validators.required],
       hairColor: ['', Validators.required],
       hairLength: ['', Validators.required],
       tattoos: ['', Validators.required]*/
    });
  }

  /* Options relation */
  public typeRelation: Option[];

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
  }

  saveMemberRegister(values) {
    const memberData = new FormData();


    memberData.append('userName', values.userName);
    memberData.append('password', values.password);
    memberData.append('email', values.email);
    memberData.append('typeRelation', values.typeRelation);
    memberData.append('invitationCode', values.invitationCode);
    memberData.append('country', values.country);
    memberData.append('state', values.state);
    memberData.append('postalZipCode', values.postalZipCode);

    /*

    memberData.append('dateOfBirth', values.dateOfBirth);
    memberData.append('age', values.age);
    memberData.append('raceEthnic', values.raceEthnic);
*/


    /*    memberData.append('lookingFor', values.lookingFor);
        memberData.append('bodyType', values.bodyType);
        memberData.append('height', values.height);
        memberData.append('weight', values.weight);
        memberData.append('eyesColor', values.eyesColor);
        memberData.append('hairColor', values.hairColor);
        memberData.append('hairLength', values.hairLength);
        memberData.append('tattoos', values.tattoos);*/

    this.memberRegisterService.createMemberRegister(memberData).subscribe(result => {
      this.router.navigate(['/tellUsMore']);
    });
  }


  /* countries and states mock */
  countries = COUNTRIES;
  statesUsa = STATES_USA;
  public formHidden = false;

}


/*

INICIAL FORM
import {Component, OnInit, ViewChild} from '@angular/core';
import {COUNTRIES, STATES_ARGENTINA, STATES_COLOMBIA, STATES_USA, STATES_VENEZUELA} from '../../mock/mock-country';
import {Option} from '../../models/option.model';
import {Member} from '../../class/memberClass';
import {state} from '@angular/animations';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-member-sign-in',
  templateUrl: './member-sign-in.component.html',
  styleUrls: ['./member-sign-in.component.css']
})
export class MemberSignInComponent implements OnInit {
  public formHidden = false;
  /!* Options relation *!/
  public typeRelation: Option[];
  /!* countries and states mock *!/
  countries = COUNTRIES;
  statesUsa = STATES_USA;
  statesArg = STATES_ARGENTINA;
  statesCol = STATES_COLOMBIA;
  statesVen = STATES_VENEZUELA;

  /!*Calculate age*!/
  CalculateAge() {
  }
  @ViewChild('formmemb') formmemb: NgForm;
  member: any;

  constructor() {
    this.member = {
      id: '',
      name: '',
      lastName: '',
      age: '',
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
      numContact: '',
      typeRelation: '',
      invitationCode: '',
      password: '',
      country: '',
      state: '',
      postalZipCode: '',
      dateOfBirth: '',
      email: '',
    };
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
  }
  onSubmit() {
    this.member.name = this.formmemb.value.name;
    this.member.password = this.formmemb.value.password;
    this.member.dateOfBirth = this.formmemb.value.dateOfBirth;
    this.member.email = this.formmemb.value.email;
    this.formmemb.reset();
  }
}

*/
