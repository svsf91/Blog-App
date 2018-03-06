import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WebsiteService} from '../../../services/website.service.client';
import {Website} from '../../../models/website.client.model';
import {WebsiteListComponent} from '../website-list/website-list.component';
import {StatusService} from '../../../services/status.service.client';
import {User} from '../../../models/user.client.model';

@Component({
  selector: 'app-website-new',
  templateUrl: './website-new.component.html',
  styleUrls: ['./website-new.component.css']
})
export class WebsiteNewComponent implements OnInit {
  user: User;
  website: Website = new Website('');
  websites: Website[];
  name: string;
  description: string;
  constructor(private websiteService: WebsiteService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private statusService: StatusService) {}
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
  newWebsite() {
    this.websiteService.createWebsite(this.user._id, this.website).subscribe(
      res => this.router.navigate(['/user', this.user._id, 'website']),
      err => console.log('error add website')
    );
  }
}
