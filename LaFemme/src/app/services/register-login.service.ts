
/* Backend*/

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterLoginService {
  // base api url
  // public url = 'https://lafemme1.com/testapp/backend/laFemmeApi/API_register_login/User';
  // local host
  public url = 'https://localhost:8888/backend/laFemmeApi/API_member/';

  constructor(private http: HttpClient) {
  }

  getLogin() {
    return this.http.get(this.url + 'login.php');
  }

  getLoginId(id) {
    return this.http.get(this.url + 'login.php?id=' + id);
  }

  getMembers() {
    return this.http.get(this.url + 'view.php');
  }

  createMembers(data) {
    return this.http.post(this.url + 'create.php', data);
  }

  updateMembers(data) {
    return this.http.post(this.url + 'update.php', data);
  }

  deleteMembers(id) {
    return this.http.get(this.url + 'delete.php?id=' + id);
  }


}
