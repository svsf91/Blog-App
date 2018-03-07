import { Component, OnInit } from '@angular/core';
import {StatusService} from '../../../services/status.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetService} from '../../../services/widget.service.client';
import {Widget} from '../../../models/widget.client.model';
import {User} from '../../../models/user.client.model';
import {FlickrService} from '../../../services/flickr.service.client';

@Component({
  selector: 'app-widget-flickr-search',
  templateUrl: './widget-flickr-search.component.html',
  styleUrls: ['./widget-flickr-search.component.css', '../../../app.component.css']
})
export class WidgetFlickrSearchComponent implements OnInit {
user: User;
  widget: Widget = new Widget('', 560);
  websiteId: string;
  pageId: string;
  createError: string;
  searchText: string;
  photo: any;
  photos = [];
  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private statusService: StatusService,
              private flickrService: FlickrService,
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
  searchPhotos() {
    this.flickrService.searchPhotos(this.searchText).subscribe(
      res => {
        let data = res;
        data = data.replace('jsonFlickrApi', '');
        data = data.substring(0, data.length - 1);
        this.photos = JSON.parse(data).photos;
      }
    );
  }
  selectPhoto() {
    let url = 'https://farm' + this.photo.farm + '.staticflickr.com/' + this.photo.server;
    url += '/' + this.photo.id + '_' + this.photo.secret + '_b.jpg';
    this.widget.url = url;
    this.widget.rows = 0;
    this.widgetService.updateWidget(this.widget._id, this.widget).subscribe(
      res => this.router.navigate(['../'])
    );
  }
}
