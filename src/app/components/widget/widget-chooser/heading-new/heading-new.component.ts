import {Component, OnInit} from '@angular/core';
import {User} from '../../../../models/user.client.model';
import {Widget} from '../../../../models/widget.client.model';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetService} from '../../../../services/widget.service.client';
import {StatusService} from '../../../../services/status.service.client';

@Component({
  selector: 'app-heading-new',
  templateUrl: './heading-new.component.html',
  styleUrls: ['./heading-new.component.css']
})
export class HeadingNewComponent implements OnInit {
  user: User;
  widget: Widget = new Widget('', '80%', 0, 1);
  websiteId: string;
  pageId: string;
  createError: string;

  constructor(private activatedRoute: ActivatedRoute,
              private widgetService: WidgetService,
              private router: Router,
              private statusService: StatusService) {
  }

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
    if (this.widget.text == null) {
      this.createError = 'Text is required for HEADING';
      return;
    } else {
      this.widget.type = 'HEADING';
      this.widgetService.createWidget(this.pageId, this.widget).subscribe(
        res => this.router.navigate(['/user', this.user._id, 'website', this.websiteId, 'page', this.pageId, 'widget'])
      );
    }
  }
}
