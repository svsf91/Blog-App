import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user.client.model';

// injecting service into module
@Injectable()

export class UserService {

  api = {
    'createUser': this.createUser,
    'findUserById': this.findUserById,
    'findUserByUsername': this.findUserByUsername,
    'findUserByCredentials': this.findUserByCredentials,
    'updateUser': this.updateUser,
    'deleteUser': this.deleteUser,
    'login': this.login,
    'checkLoggedIn': this.checkLoggedIn,
    'logout': this.logout,
    'register': this.register
  };

  constructor(private http: HttpClient) {
  }

  createUser(user: User) {
    const url = '/api/register';
    return this.http.post<User>(url, user);
  }

  findUserById(userId: string) {
    const url = '/api/user/' + userId;
    return this.http.get<User>(url);
  }

  findUserByUsername(username: string) {
    const url = '/api/user?username=' + username;
    return this.http.get<User>(url);
  }

  findUserByCredentials(username: string, password: string) {
    const url = '/api/user?username=' + username + '&password=' + password;
    return this.http.get<User>(url);
  }

  updateUser(userId: string, user) {
    const url = '/api/user/' + userId;
    return this.http.put<User>(url, user);
  }

  deleteUser(userId: string) {
    const url = '/api/user/' + userId;
    return this.http.delete(url);
  }

  checkLoggedIn() {
    const url = 'api/checkLoggedIn';
    return this.http.get<User>(url);
  }

  login(username: string, password: string) {
    const url = '/api/login';
    const credentials = {
      username: username,
      password: password
    };
    return this.http.post<User>(url, credentials);
  }

  register(user) {
    const url = 'api/register';
    return this.http.post<User>(url, user);
  }

  logout() {
    const url = '/api/logout';
    return this.http.get<User>(url);
  }
}
