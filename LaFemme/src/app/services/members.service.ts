
/* Backend*/

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  // base api url
  public url = 'https://lafemme1.com/testapp/backend/Web_API_Member/';

  constructor(private http: HttpClient) {
  }

  getMembers() {
    return this.http.get(this.url + 'view.php');
  }

  getMemberDetails(id) {
    return this.http.get(this.url + 'view_one.php?id=' + id);
  }

  createMember(data) {
    return this.http.post(this.url + 'create.php', data);
  }

  updateMember(data) {
    return this.http.post(this.url + 'update.php', data);
  }

  deleteMember(id) {
    return this.http.get(this.url + 'delete.php?id=' + id);
  }


}
