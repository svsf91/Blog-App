import {Component, Injectable, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {User} from '../../../models/User';
import {UserService} from '../../../services/user.service.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
@Injectable()
export class RegisterComponent implements OnInit {
  @ViewChild('f') loginForm: NgForm;
  username: string;
  password: string;
  verify: string;
  errorFlag: boolean;
  errorMsg: string;

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit() {
  }

  register() {
    let user;
    this.userService.findUserByUsername(this.username).subscribe(response => {
      user = response;
      if (user) {
        this.errorFlag = true;
        this.errorMsg = 'User already exists';
      } else {
        const newUser = {
          'username': this.username,
          'password': this.password,
          'firstName': '',
          'lastName': '',
          'email': ''
        };
        this.userService.createUser(newUser).subscribe(
          res => {
            user = res;
            this.router.navigate(['/user', user._id]);
          });
      }
    });
  }
}
