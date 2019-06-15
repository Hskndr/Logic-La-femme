import {Component, OnInit} from '@angular/core';
import {UserService} from '../service/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styles: []
})
export class AdminComponent implements OnInit {
  message = 'Loading.....';

  constructor(
    private user: UserService
  ) {
  }

  ngOnInit() {
    this.user.getSomeData().subscribe(data => {
      this.message = data.message;
    });
  }

}
