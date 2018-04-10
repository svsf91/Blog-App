import { Component, OnInit } from '@angular/core';
import {WebsiteService} from '../../../services/website.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {Website} from '../../../models/website.client.model';
import {User} from '../../../models/user.client.model';
import {StatusService} from '../../../services/status.service.client';

@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['./website-edit.component.css']
})
export class WebsiteEditComponent implements OnInit {
  user: User;
  websiteId: string;
  website: Website;
  websites: Website[];
  message: string;
  constructor(private websiteService: WebsiteService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private statusService: StatusService) { }
  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params => this.websiteId = params['websiteId']
    );
    this.statusService.checkLoggedIn().subscribe(
      response => {
        this.user = response;
        this.websiteService.findAllWebsitesForUser(this.user._id).subscribe(
          res => this.websites = res
        );
        this.websiteService.findWebsiteById(this.websiteId).subscribe(
          res => this.website = res
        );
      },
      err => {
        this.router.navigate(['/login']);
      }
    );
  }
  updateWebsite() {
    this.websiteService.updateWebsite(this.website._id, this.website).subscribe(
      res => {
        this.message = 'Website changes saved';
        this.ngOnInit();
        this.router.navigate(['/user', this.user._id, 'website']);
      },
      err => this.message = 'Website changes failed'
    );
  }
  removeWebsite() {
    this.websiteService.removeWebsite(this.websiteId).subscribe(
      res => this.router.navigate(['/user', this.user._id, 'website'])
    );
  }
  editWebsite(websiteId: string) {
    this.router.navigate(['/user', this.user._id, 'website', websiteId]);
    this.ngOnInit();
  }
}
