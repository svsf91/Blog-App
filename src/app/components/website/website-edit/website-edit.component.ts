import { Component, OnInit } from '@angular/core';
import {WebsiteService} from '../../../services/website.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['./website-edit.component.css']
})
export class WebsiteEditComponent implements OnInit {
  websiteId: string;
  websiteName: string;
  userId: string;
  website = {};
  websites = [{}];
  constructor(private websiteService: WebsiteService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }
  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.websiteId = params['websiteId'];
        this.userId = params['userId'];
      }
    );
    this.websites = this.websiteService.findWebsiteByUser(this.userId);
    this.website = this.websiteService.findWebsiteById(this.websiteId);
    this.websiteName = this.website['name'];
  }
}
