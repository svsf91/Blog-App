import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user.client.model';

@Injectable()

export class StatusService {
  api = {
    'checkLoggedIn': this.checkLoggedIn
  };

  constructor(private http: HttpClient) {}
  checkLoggedIn () {
    const url = '/api/checkLoggedIn';
    return this.http.get<User>(url);
  }
}
