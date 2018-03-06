import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PageService} from '../../../services/page.service.client';
import {Page} from '../../../models/page.client.model';
import {StatusService} from '../../../services/status.service.client';
import {User} from '../../../models/user.client.model';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {
  user: User;
  websiteId: string;
  pageId: string;
  pages: Page[];
  page: Page;
  constructor(private activatedRoute: ActivatedRoute,
              private pageService: PageService,
              private router: Router,
              private statusService: StatusService) { }

  ngOnInit() {
    this.statusService.checkLoggedIn().subscribe(
      response => {
        this.user = response;
      },
      err => {
        this.router.navigate(['/login']);
      }
    );
    this.activatedRoute.params.subscribe(
      params => this.websiteId = params['websiteId']
    );
    this.pageService.findPageByWebsiteId(this.websiteId).subscribe(
      res => this.pages = res
    );
  }
}
