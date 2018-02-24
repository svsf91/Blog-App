import {Injectable} from '@angular/core';
import {Http, RequestOptions, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';

// injecting service into module
@Injectable()

export class PageService {

  constructor() {
  }

  pages = [
    { '_id': '321', 'name': 'Post 1', 'websiteId': '456', 'description': 'Lorem' },
    { '_id': '432', 'name': 'Post 2', 'websiteId': '456', 'description': 'Lorem' },
    { '_id': '543', 'name': 'Post 3', 'websiteId': '456', 'description': 'Lorem' },
    { '_id': '123', 'name': 'Post 1', 'websiteId': '123', 'description': 'Lorem' },
    { '_id': '234', 'name': 'Post 2', 'websiteId': '234', 'description': 'Lorem' },
    { '_id': '345', 'name': 'Post 3', 'websiteId': '345', 'description': 'Lorem' },
    { '_id': '456', 'name': 'Post 1', 'websiteId': '567', 'description': 'Lorem' },
    { '_id': '567', 'name': 'Post 2', 'websiteId': '678', 'description': 'Lorem' },
    { '_id': '678', 'name': 'Post 3', 'websiteId': '789', 'description': 'Lorem' },
    { '_id': '789', 'name': 'Post 1', 'websiteId': '678', 'description': 'Lorem' },
    { '_id': '134', 'name': 'Post 2', 'websiteId': '789', 'description': 'Lorem' },
    { '_id': '245', 'name': 'Post 3', 'websiteId': '890', 'description': 'Lorem' }
  ];

  api = {
    'createPage': this.createPage,
    'findPageByWebsiteId': this.findPageByWebsiteId,
    'findPageById': this.findPageById,
    'updatePage': this.updagePage,
    'deletePage': this.deletePage
  };

  createPage(websiteId: string, page: any) {
    page._id = Math.random();
    page.websiteId = websiteId;
    this.pages.push(page);
    return page;
  }

  findPageByWebsiteId(websiteId: string) {
    return this.pages.filter(p => p.websiteId === websiteId);
  }
  findPageById(pageId: string) {
    for (let x = 0; x < this.pages.length; x++) {
      if (this.pages[x]._id === pageId) {
        return this.pages[x];
      }
    }
  }

  updagePage(pageId: string, page: any) {
    for (let x = 0; x < this.pages.length; x++) {
      if (this.pages[x]._id === pageId) {
        this.pages[x] = page;
      }
    }
  }

  deletePage(pageId: string) {
    for (let x = 0; x < this.pages.length; x++) {
      if (this.pages[x]._id === pageId) {
        this.pages.splice(x, 1);
      }
    }
  }
}
