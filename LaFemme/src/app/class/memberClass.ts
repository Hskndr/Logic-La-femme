/* class member */

export class Member {
  public id: number;
  public name: string;
  public lastName: string;
  public age: number;
  public zodiacSign: string;
  public bodyType: string;
  public height: string;
  public weight: string;
  public eyes: string;
  public hairColor: string;
  public hairLength: string;
  public raceEthnic: string;
  public tattoos: string;
  public locatedIn: string;
  public numContact: number;
  public typeRelation: number;
  public invitationCode: number;
  public password: string;
  public country: string;
  public state: string;
  public postalZipCode: string;
  public dateOfBirth: string;
  public email: string;

  constructor(id: number,
              name: string,
              lastName: string,
              age: number,
              zodiacSign: string,
              bodyType: string,
              height: string,
              weight: string,
              eyes: string,
              hairColor: string,
              hairLength: string,
              raceEthnic: string,
              tattoos: string,
              locatedIn: string,
              numContact: number,
              typeRelation: number,
              invitationCode: number,
              password: string,
              country: string,
              state: string,
              postalZipCode: string,
              dateOfBirth: string,
              email: string) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.zodiacSign = zodiacSign;
    this.bodyType = bodyType;
    this.height = height;
    this.weight = weight;
    this.eyes = eyes;
    this.hairColor = hairColor;
    this.hairLength = hairLength;
    this.raceEthnic = raceEthnic;
    this.tattoos = tattoos;
    this.locatedIn = locatedIn;
    this.numContact = numContact;
    this.typeRelation = typeRelation;
    this.invitationCode = invitationCode;
    this.password = password;
    this.country = country;
    this.state = state;
    this.postalZipCode = postalZipCode;
    this.dateOfBirth = dateOfBirth;
    this.email = email;
  }

}
