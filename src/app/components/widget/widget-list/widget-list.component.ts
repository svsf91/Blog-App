import { Component, OnInit } from '@angular/core';
import {WidgetService} from '../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {Widget} from '../../../models/widget.client.model';
import {StatusService} from '../../../services/status.service.client';
import {User} from '../../../models/user.client.model';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {
  user: User;
  widget: Widget;
  widgets: Widget[];
  userId: string;
  websiteId: string;
  pageId: string;
  constructor(private widgetService: WidgetService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private statusService: StatusService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params => this.pageId = params['pageId']
    );
    this.statusService.checkLoggedIn().subscribe(
      response => {
        this.user = response;
      },
      err => {
        this.router.navigate(['/login']);
      }
    );
    this.widgetService.findWidgetsByPageId(this.pageId).subscribe(
      res => this.widgets = res
    );
  }
}
