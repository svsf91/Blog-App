import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../services/user.service.client';
import {StatusService} from '../../../services/status.service.client';
import {User} from '../../../models/user.client.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userId: string;
  user: User = new User('hugh', '', '', 'hugh', 'Deng', 'hugh@gmail.com');
  username: string;
  message: string;

  constructor(private userService: UserService,
              private activatedRoute: ActivatedRoute,
              private statusService: StatusService,
              private router: Router) {
  }

  ngOnInit() {
    // this.activatedRoute.params.subscribe(
    //   (params: any) => {
    //     this.userId = params['userId'];
    //   }
    // );
    this.statusService.checkLoggedIn().subscribe(
      response => {
        this.user = response;
      },
      err => {
        this.router.navigate(['/login']);
      }
    );
  }

  updateUser() {
    this.userService.updateUser(this.user._id, this.user).subscribe(
      response => {
          this.message = 'Profile changes saved';
        },
      err => {
        this.message = 'Failed to update';
      }
    );
  }

  removeUser() {
    this.userService.deleteUser(this.user._id).subscribe();
    this.message = 'User deleted';
    this.router.navigate(['/login']);
  }

  logout() {
    this.userService.logout().subscribe(
      res => this.router.navigate(['/login'])
    );
  }
}
