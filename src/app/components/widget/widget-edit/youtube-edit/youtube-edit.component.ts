import {Component, Input, OnInit} from '@angular/core';
import {Widget} from '../../../../models/widget.client.model';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-youtube-edit',
  templateUrl: './youtube-edit.component.html',
  styleUrls: ['./youtube-edit.component.css', '../../../../app.component.css']
})
export class YoutubeEditComponent implements OnInit {
  @Input() widget: Widget;
  userId: string;
  websiteId: string;
  pageId: string;
  constructor(private widgetService: WidgetService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
   this.activatedRoute.params.subscribe(
     params => {
       this.userId = params['userId'];
       this.websiteId = params['websiteId'];
       this.pageId = params['pageId'];
     }
   );
  }
  updateWidget() {
    this.widget.size = 0;
    this.widgetService.updateWidget(this.widget._id, this.widget).subscribe(
      res => this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget'])
    );
  }
  deleteWidget() {
    this.widgetService.deleteWidget(this.widget._id).subscribe(
      res => this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget'])
    );
  }
}
