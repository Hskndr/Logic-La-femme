import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import * as $ from 'jquery';
import 'DataTables.net';

import {RegisterLoginService} from '../../services/register-login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {


  public members: any = [];
  @ViewChild('membersTable') Table;
  public dataTable: any;

  constructor(private memberService: RegisterLoginService, private router: Router) {
  }

  ngOnInit() {
    this.loadMembers();
  }

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
    this.memberService.deleteMembers(pID).subscribe(data => {
      this.loadMembers();
    });
  }
}
