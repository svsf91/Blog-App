import { Component, OnInit } from '@angular/core';
import {WidgetService} from '../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {Widget} from '../../../models/Widget';

@Component({
  selector: 'app-widget-edit',
  templateUrl: './widget-edit.component.html',
  styleUrls: ['./widget-edit.component.css']
})
export class WidgetEditComponent implements OnInit {
  widgetId: string;
  userId: string;
  websiteId: string;
  pageId: string;
  widgetName: string;
  widget: Widget;
  widgets: Widget[];
  constructor(private widgetService: WidgetService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }
  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.widgetId = params['widgetId'];
        this.websiteId = params['websiteId'];
        this.userId = params['userId'];
        this.pageId = params['pageId'];
      }
    );
    // this.widget = this.widgetService.findWidgetById(this.widgetId);
    // this.widgets = this.widgetService.findWidgetByPageId(this.pageId);
  }
  jumpToEdit(widgetId) {
    this.widgetId = widgetId;
    // this.widget = this.widgetService.findWidgetById(this.widgetId);
    this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget', this.widgetId]);
  }
}
