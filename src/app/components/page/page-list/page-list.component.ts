import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PageService} from '../../../services/page.service.client';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {
  websiteId: string;
  pageId: string;
  pages = [{}];
  page = {};
  constructor(private activatedRoute: ActivatedRoute,
              private pageService: PageService,
              private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.websiteId = params['websiteId'];
        this.pageId = params['pageId'];
      }
    );
    this.pages = this.pageService.findPageByWebsiteId(this.websiteId);
    this.page = this.pageService.findPageById(this.pageId);
  }
}
