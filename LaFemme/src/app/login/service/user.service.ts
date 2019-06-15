import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

interface myData {
  success: boolean,
  message: string,
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // base api url
  public url = 'https://lafemme1.com/testapp/backend/Web_API_Member/login-signin/';


  constructor(
    private http: HttpClient
  ) {
  }

  getSomeData() {
    return this.http.get<myData>(this.url + 'database.php');
  }
}
