import {Component, OnInit} from '@angular/core';
import {Member} from '../../class/memberClass';

@Component({
  selector: 'app-manage-profile',
  templateUrl: './manage-profile.component.html',
  styleUrls: ['./manage-profile.component.css']
})
export class ManageProfileComponent implements OnInit {

  public member: Member;
  public members: Member[];

  constructor() {
  }

  ngOnInit() {
    this.member = {
      id: 1,
      name: 'Robin',
      lastName: 'Ohara',
      age: 51,
      zodiacSign: 'picis',
      bodyType: 'slim',
      height: 'tall',
      weight: 'weight',
      eyes: 'blue',
      hairColor: 'black',
      hairLength: 'long',
      raceEthnic: 'asian',
      tattoos: 'none',
      locatedIn: 'east blue',
      numContact: 0,
      typeRelation: 0,
      invitationCode: 100,
      password: 'poneglyph',
      country: 'Arabasta',
      state: 'Baltigo',
      postalZipCode: '032',
      dateOfBirth: '06/02/1988',
      email: 'robin@oop.com',
    }
    ;
    this.members = [];
  }

}
