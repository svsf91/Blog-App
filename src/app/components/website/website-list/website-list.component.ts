import {Component, Injectable, OnInit} from '@angular/core';
import {WebsiteService} from '../../../services/website.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {Website} from '../../../models/website.client.model';
import {StatusService} from '../../../services/status.service.client';
import {User} from '../../../models/user.client.model';


@Component({
  selector: 'app-website-list',
  templateUrl: './website-list.component.html',
  styleUrls: ['./website-list.component.css']
})
@Injectable()
export class WebsiteListComponent implements OnInit {
  user: User;
  websites: Website[];

  constructor(private websiteService: WebsiteService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private statusService: StatusService) {
  }

  ngOnInit() {
    this.statusService.checkLoggedIn().subscribe(
      response => {
        this.user = response;
        this.websiteService.findAllWebsitesForUser(this.user._id).subscribe(
          res => this.websites = res
        );
      },
      err => {
        this.router.navigate(['/login']);
      }
    );
  }
}
