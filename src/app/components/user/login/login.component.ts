import {Component, Injectable, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {UserService} from '../../../services/user.service.client';
import {User} from '../../../models/user.client.model';

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

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit() {
  }

  login() {
    this.userService.login(this.username, this.password)
      .subscribe(
        response => {
          this.user = response;
          this.router.navigate(['/user', this.user._id]);
        },
        err => {
          this.errorFlag = true;
          this.errorMsg = 'Invalid Password';
        });
  }
}
