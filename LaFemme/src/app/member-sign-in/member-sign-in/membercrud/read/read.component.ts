import {Component, OnInit} from '@angular/core';
import {MembersService} from '../../../../services/members.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styles: []
})
export class ReadComponent implements OnInit {

  memberID: any;
  memberData: any;

  constructor(
    private memberService: MembersService,
    private router: Router,
    private actRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.memberID = this.actRoute.snapshot.params['id'];
    this.loadMemberDetails(this.memberID);
  }

  loadMemberDetails(memberID) {
    this.memberService.getMemberDetails(memberID).subscribe(member => {
      this.memberData = member;
    });
  }

  navigation(link) {
    this.router.navigate([link]);
  }

}
