import { Component, OnInit } from '@angular/core';
import { PageService } from '../../../services/page.service.client';
import { ActivatedRoute, Router } from '@angular/router';
import { Page } from '../../../models/page.client.model';
import { StatusService } from '../../../services/status.service.client';
import { User } from '../../../models/user.client.model';

@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css']
})
export class PageEditComponent implements OnInit {
  user: User;
  websiteId: string;
  pageId: string;
  pages: Page[];
  page: Page;
  message: string;
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
      params => {
        this.websiteId = params['websiteId'];
        this.pageId = params['pageId'];
      }
    );
    this.pageService.findPageByWebsiteId(this.websiteId).subscribe(
      res => this.pages = res
    );
    this.pageService.findPageById(this.pageId).subscribe(
      res => this.page = res
    );
  }
  updatePage() {
    this.pageService.updatePage(this.page._id, this.page).subscribe(
      res => {
        this.message = 'Page changes saved!';
        this.ngOnInit();
      },
      err => this.message = 'Page changes failed!'
    );
  }
  removePage() {
    this.pageService.removePage(this.page._id).subscribe(
      res => this.router.navigate(['/user', this.user._id, 'website', this.websiteId, 'page'])
    );
  }
  editPage(pageId) {
    this.pageId = pageId;
    // this.page = this.pageService.findPageById(this.pageId);
    this.router.navigate(['/user', this.user._id, 'website', this.websiteId, 'page']);
    this.ngOnInit();
  }
}
