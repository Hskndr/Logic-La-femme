import {Component, OnInit} from '@angular/core';
import {AuthService} from '../service/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // review records or AppComponent
  records = [];

  constructor(
    private Auth: AuthService,
    private router: Router
  ) {
  }

  ngOnInit() {
  }

  loginUser(event) {
    event.preventDefault();

    const target = event.target;
    const email = target.querySelector('#email').value;
    const password = target.querySelector('#password').value;

    // Inject AuthService
    this.Auth.getUserDetails(email, password).subscribe(data => {
      if (data.success) {
        // redirect the person to /admin
        this.router.navigate(['login/admin']); // TO PROFILE
        this.Auth.setLoggedIn(true);
      } else {
        window.alert(data.message);
      }
    });
    console.log(email, password);
  }
}
