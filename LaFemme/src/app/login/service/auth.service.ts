import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

interface myData {
  success: boolean,
  message: string,
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // base api url
  public url = 'https://lafemme1.com/testapp/backend/laFemmeApi/API_login/';

  private loggedInStatus = JSON.parse(localStorage.getItem('loggedIn') || 'false')

  constructor(
    private http: HttpClient
  ) {
  }

  setLoggedIn(value: boolean) {
    this.loggedInStatus = value;
    localStorage.setItem('loggedIn', 'true');
  }

  get isLoggedIn() {
    return JSON.parse(localStorage.getItem('loggedIn') || this.loggedInStatus.toString());
  }

  getUserDetails(username, password) {
    // post these details to API server user info if correct
    return this.http.post<myData>(this.url + 'auth.php', {
      username,
      password
    });
  }
}
