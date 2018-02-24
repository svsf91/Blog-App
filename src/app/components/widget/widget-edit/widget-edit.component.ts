import { Component, OnInit } from '@angular/core';
import {WidgetService} from '../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-widget-edit',
  templateUrl: './widget-edit.component.html',
  styleUrls: ['./widget-edit.component.css']
})
export class WidgetEditComponent implements OnInit {
  widgetId: string;
  userId: string;
  websiteId: string;
  widgetName: string;
  widget = {};
  constructor(private widgetService: WidgetService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }
  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.widgetId = params['widgetId'];
        this.websiteId = params['websiteId'];
        this.userId = params['userId'];
      }
    );
    this.widget = this.widgetService.findWidgetById(this.widgetId);
    this.widgetName = this.widget['text'];
  }

}
