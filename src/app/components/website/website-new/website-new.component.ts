import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WebsiteService} from '../../../services/website.service.client';
import {Website} from '../../../models/Website';
import {WebsiteListComponent} from '../website-list/website-list.component';

@Component({
  selector: 'app-website-new',
  templateUrl: './website-new.component.html',
  styleUrls: ['./website-new.component.css']
})
export class WebsiteNewComponent implements OnInit {
  websiteId: string;
  userId: string;
  website: Website;
  websites: Website[];
  constructor(private websiteService: WebsiteService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {}
  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.websiteId = params['websiteId'];
        this.userId = params['userId'];
      }
    );
    // this.websites = this.websiteService.findWebsiteByUser(this.userId);
    // this.website = this.websiteService.findWebsiteById(this.websiteId);
  }
}
