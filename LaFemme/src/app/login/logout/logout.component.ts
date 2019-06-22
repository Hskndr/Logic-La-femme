import {Component, OnInit} from '@angular/core';
import {UserService} from '../service/user.service';
import {Router} from '@angular/router';
import {AuthService} from '../service/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styles: []
})
export class LogoutComponent implements OnInit {

  constructor(
    private user: UserService,
    private router: Router,
    private auth: AuthService
  ) {
  }

  ngOnInit() {
    this.user.logout().subscribe(data => {
      if (data.success) {
        this.router.navigate(['']);
        this.auth.setLoggedIn(false);
      } else {
        window.alert('Some Problem');
      }
    });
  }

}
