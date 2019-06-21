import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {MemberRegisterService} from '../../services/member-register.service';

import {Option} from '../../models/option.model';

import {
  COUNTRIES,
  STATES_ARGENTINA,
  STATES_COLOMBIA,
  STATES_USA,
  RACE,
  STATES_VENEZUELA
} from '../../mock/mock-country';


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

      name: ['', Validators.required],
      password: ['', Validators.compose([Validators.required, Validators.pattern('^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$')])],
      email: ['', Validators.compose([Validators.required,
        Validators.pattern('^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$'),
        Validators.email])],
      typeRelation: ['', Validators.required],
      invitationCode: ['', Validators.required],
      country: ['', Validators.required],
      state: ['', Validators.required],
      postalZipCode: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      age: ['', Validators.compose([Validators.required, Validators.min(18)])],
      zodiacSign: ['', Validators.required],
      raceEthnic: ['', Validators.required],


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


    memberData.append('name', values.name);
    memberData.append('password', values.password);
    memberData.append('email', values.email);
    memberData.append('typeRelation', values.typeRelation);
    memberData.append('invitationCode', values.invitationCode);
    memberData.append('country', values.country);
    memberData.append('state', values.state);
    memberData.append('postalZipCode', values.postalZipCode);
    memberData.append('dateOfBirth', values.dateOfBirth);
    memberData.append('age', values.age);
    memberData.append('zodiacSign', values.zodiacSign);
    memberData.append('raceEthnic', values.raceEthnic);

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
  races = RACE;
  public formHidden = false;

  /* calculate age */

  calculateAge() {
    // const ageByCalculate = document.querySelector('#dateOfBirth');
    // const ageByCalculate = 20 - 2;

    // return ageByCalculate;
  }

  /* verify age */
  veriAge() {
    const element = <HTMLInputElement>document.getElementById('verifyage');
    const isChecked = element.checked;
  }
}
