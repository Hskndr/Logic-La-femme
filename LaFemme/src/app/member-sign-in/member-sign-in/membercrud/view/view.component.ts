import {Component, OnInit, ViewChild} from '@angular/core';
import {MembersService} from '../../../../services/members.service';
import {Router} from '@angular/router';
import * as $ from 'jquery';
import 'DataTables.net';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styles: []
})
export class ViewComponent implements OnInit {



  public members: any = [];
  @ViewChild('membersTable') Table;
  public dataTable: any;

  constructor(private memberService: MembersService, private router: Router) {
  }

  ngOnInit() {
    this.loadMembers();
  }

  /*This is without delete*/

  /*
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
  */

  loadMembers() {
    /* Checkthis code*/
   /* if ($.fn.DataTable.isDataTable(this.Table.nativeElement)) {
      $(this.Table.nativeElement).dataTable().fnDestroy();
    }*/
    this.memberService.getMembers().subscribe(
      productData => {
        this.members = productData;

        this.dataTable = $(this.Table.nativeElement);
        setTimeout(() => {
          this.dataTable.DataTable();
        }, 2000);

      }, (err) => {
      }, () => {
      }
    );
  }

  getNavigation(link, id) {
    if (id === '') {
      this.router.navigate([link]);
    } else {
      this.router.navigate([link + '/' + id]);
    }
  }

  deleteMember(pID) {
    this.memberService.deleteMember(pID).subscribe(data => {
      this.loadMembers();
    });
  }

}
