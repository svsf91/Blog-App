import {Component, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import {NgForm} from '@angular/forms';
import {UserService} from '../../../services/user.service.client';
import {User} from '../../../models/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('f') loginForm: NgForm;
  // properties
  username: string;
  password: string;
  user: User;
  errorFlag: boolean;
  errorMsg: string;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {}
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
