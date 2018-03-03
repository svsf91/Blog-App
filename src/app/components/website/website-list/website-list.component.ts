import {Component, Injectable, OnInit} from '@angular/core';
import {WebsiteService} from '../../../services/website.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {Website} from '../../../models/Website';


@Component({
  selector: 'app-website-list',
  templateUrl: './website-list.component.html',
  styleUrls: ['./website-list.component.css']
})
@Injectable()
export class WebsiteListComponent implements OnInit {
  userId: string;
  websiteId: string;
  website: Website;
  websites: Website[];
  constructor(private websiteService: WebsiteService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }
  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.userId = params['userId'];
      }
    );
    this.websites = this.websiteService.findWebsiteByUser(this.userId);
  }
}
