import {Component, Injectable, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {User} from '../../../models/User';
import {UserService} from '../../../services/user.service.client';

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
  constructor(private userService: UserService) { }

  ngOnInit() {
  }
  register() {
    const newUser = {
        'username': this.username,
        'password': this.password,
        'firstName': '',
        'lastName': '',
        'email': ''
      };
      this.userService.createUser(newUser).subscribe(
        res => console.log(res)
      );
  }
}
