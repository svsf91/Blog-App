import { Component, OnInit } from '@angular/core';
import {PageService} from '../../../services/page.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {Page} from '../../class/Page';

@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css']
})
export class PageEditComponent implements OnInit {
  websiteId: string;
  pageId: string;
  pageName: string;
  pages: Page[];
  page: Page;
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
    this.pageName = this.page.name;
  }
}
