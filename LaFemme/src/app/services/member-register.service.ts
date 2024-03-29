
/* Backend*/

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MemberRegisterService {
  // base api url
  // public url = 'http://lafemme1.com/testapp/backend/laFemmeApi/API_member/';

  // LOcal Host
  public url = 'https://lafemme1.com/testapp/test/lafemmeNita/';
  constructor(private http: HttpClient) {
  }

  getMemberRegister() {
    return this.http.get(this.url + 'view.php');
  }

  getMemberRegisterDetails(id) {
    return this.http.get(this.url + 'view_one.php?id=' + id);
  }

  createMemberRegister(data) {
    // return this.http.post(this.url + 'create.php', data);
     return this.http.post(this.url + 'create-account2.php', data);

  }

  updateMemberRegister(data) {
    return this.http.post(this.url + 'update.php', data);
  }

  deleteMemberRegister(id) {
    return this.http.get(this.url + 'delete.php?id=' + id);
  }


}
