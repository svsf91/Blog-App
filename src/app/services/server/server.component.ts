import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {User} from '../../components/class/User';
import {map} from 'rxjs/operator/map';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  users: User[];
  constructor(private http: HttpClient) { }
  url = 'http://localhost:3000';
  ngOnInit() {
    this.getContent().subscribe(users => this.users = users);
  }
  getContent(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }
}
