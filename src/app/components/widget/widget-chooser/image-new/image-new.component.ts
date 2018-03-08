import { Component, OnInit } from '@angular/core';
import {StatusService} from '../../../../services/status.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../../../models/user.client.model';
import {Widget} from '../../../../models/widget.client.model';
import {WidgetService} from '../../../../services/widget.service.client';

@Component({
  selector: 'app-image-new',
  templateUrl: './image-new.component.html',
  styleUrls: ['./image-new.component.css']
})
export class ImageNewComponent implements OnInit {
  user: User;
  websiteId: string;
  pageId: string;
  widget: Widget = new Widget('', '700', 0, 1);
  createError: string;

  constructor(private statusService: StatusService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private widgetService: WidgetService) { }

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
      this.createError = 'Url is required for Image';
      return;
    } else {
      this.widget.type = 'IMAGE';
      this.widgetService.createWidget(this.pageId, this.widget).subscribe(
        res => this.router.navigate(['/user', this.user._id, 'website', this.websiteId, 'page', this.pageId, 'widget'])
      );
    }
  }
}
