import { Component, OnInit } from '@angular/core';



// Services
import {MembersService} from '../../services/members.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public typeRelation = 'Attached Female Seeking Male';
  message: string;
  members: any;
  constructor( private membersService: MembersService) { }

  ngOnInit() {
    this.members = this.membersService.getMembers();
    }
}
