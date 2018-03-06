import { Component, OnInit } from '@angular/core';
import {PageService} from '../../../services/page.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {Page} from '../../../models/page.client.model';
import {StatusService} from '../../../services/status.service.client';
import {User} from '../../../models/user.client.model';

@Component({
  selector: 'app-page-new',
  templateUrl: './page-new.component.html',
  styleUrls: ['./page-new.component.css']
})
export class PageNewComponent implements OnInit {
  user: User;
  pages: Page[];
  page: Page = new Page('');
  websiteId: string;
  name: string;
  description: string;
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
      }
    );
    this.pageService.findPageByWebsiteId(this.websiteId).subscribe(
      res => this.pages = res
    );
  }
  newPage() {
    this.pageService.createPage(this.websiteId, this.page).subscribe(
      res => this.router.navigate(['/user', this.user._id, 'website', this.websiteId, 'page'])
    );
  }
}
