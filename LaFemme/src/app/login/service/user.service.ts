import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";

interface myData {
  success: boolean,
  message: string,
}

interface isLoggedIn {
  status: boolean
}

interface logoutStatus {
  success: boolean
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // base api url
  // public url = 'https://lafemme1.com/testapp/backend/Web_API_Member/login-signin/';
  public url = 'https://lafemme1.com/testapp/backend/laFemmeApi/API_login/';

  constructor(
    private http: HttpClient
  ) {
  }

  getSomeData() {
    return this.http.get<myData>(this.url + 'database.php');
  }

  isLoggedIn(): Observable<isLoggedIn> {
    return this.http.get<isLoggedIn>(this.url + 'isloggedin.php');
  }

  logout() {
    return this.http.get<logoutStatus>(this.url + 'logout.php');
  }
}
