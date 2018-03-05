import {Component, Injectable, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import {NgForm} from '@angular/forms';
import {UserService} from '../../../services/user.service.client';
import {User} from '../../../models/User';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
@Injectable()
export class LoginComponent implements OnInit {
  @ViewChild('f') loginForm: NgForm;
  // properties
  username: string;
  password: string;
  user: User;
  errorFlag: boolean;
  errorMsg: string;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.userService.findUserByUserName('asdf').subscribe(
      data => {
        console.log(data);
        console.log(data['username']);
        console.log(data['password']);
      }
    );
  }
  login() {
    this.user = this.userService.findUserByUsername(this.username);
    if (this.user) {
      if (this.password === this.user.password) {
        this.router.navigate(['/user', this.user._id]);
      } else {
        this.errorFlag = true;
        this.errorMsg = 'Invalid Password';
      }
    } else {
      this.errorFlag = true;
      this.errorMsg = 'Invalid Username';
    }
  }
}
