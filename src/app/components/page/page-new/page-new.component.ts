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
  websiteId: string;
  pageId: string;
  pages: Page[];
  page: Page;
  constructor(private activatedRoute: ActivatedRoute,
              private pageService: PageService,
              private router: Router,
              private statusService: StatusService,
              private pageService: PageService) { }

  ngOnInit() {
    this.statusService.checkLoggedIn().subscribe(
      response => {
        this.user = response;
        this.pageService.findPageByWebsiteId(this.user._id).subscribe(
          res => this.pages = res
        );
      },
      err => {
        this.router.navigate(['/login']);
      }
    );
  }
}
