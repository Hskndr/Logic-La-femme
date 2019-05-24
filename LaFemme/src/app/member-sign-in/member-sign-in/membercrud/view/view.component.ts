import {Component, OnInit, ViewChild} from '@angular/core';
import {MembersService} from '../../../../services/members.service';
import {Router} from '@angular/router';
import {$} from 'protractor';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styles: []
})
export class ViewComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }

  /*  public members: any = [];
    @ViewChild('membersTable') Table;
    public dataTable: any;

    constructor(private memberService: MembersService, private router: Router) {
    }

    ngOnInit() {
      this.loadMembers();
    }

    loadMembers() {
      this.memberService.getMembers().subscribe(
        memberData => {
          this.members = memberData;
          this.dataTable = $(this.Table.nativeElement);
          setTimeout(() => {
            this.dataTable.DataTable();
          }, 2000);
        }
      );
    }
    getNavigation(link, id) {
      if (id === '') {
        this.router.navigate([link]);
      } else {
        this.router.navigate([link + '/' + id]);
      }
    }*/
}
