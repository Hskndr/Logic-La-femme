import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  members: any = [
    {
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
  ];

  constructor() {
  }

  getMembers() {
    return this.members;
  }
}
