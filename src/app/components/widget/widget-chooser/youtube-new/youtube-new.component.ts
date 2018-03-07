import { Component, OnInit } from '@angular/core';
import {Widget} from '../../../../models/widget.client.model';
import {StatusService} from '../../../../services/status.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetService} from '../../../../services/widget.service.client';
import {User} from '../../../../models/user.client.model';

@Component({
  selector: 'app-youtube-new',
  templateUrl: './youtube-new.component.html',
  styleUrls: ['./youtube-new.component.css']
})
export class YoutubeNewComponent implements OnInit {
  user: User;
  widget: Widget = new Widget('', 560);
  websiteId: string;
  pageId: string;
  createError: string;
  constructor(private activatedRoute: ActivatedRoute,
              private widgetService: WidgetService,
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
  }
  createWidget() {
    if (this.widget.url == null) {
      this.createError = 'Url is required for Youtube';
      return;
    } else {
      this.widget.type = 'YOUTUBE';
      this.widgetService.createWidget(this.pageId, this.widget).subscribe(
        res => this.router.navigate(['/user', this.user._id, 'website', this.websiteId, 'page', this.pageId, 'widget'])
      );
    }
  }
}
