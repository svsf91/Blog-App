import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../services/user.service.client';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userId: string;
  user = {};
  username: string;
  paramSubscriptions;
  constructor(private userService: UserService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.userId = params['userId'];
      }
    );
    this.user = this.userService.findUserById(this.userId);
    this.username = this.user['username'];
  }
}
