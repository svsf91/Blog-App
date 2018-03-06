import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Page} from '../models/page.client.model';

// injecting service into module
@Injectable()

export class PageService {

  api = {
    'createPage': this.createPage,
    'findPageById': this.findPageById,
    'findPageByWebsiteId': this.findPageByWebsiteId,
    'updatePage': this.updatePage,
    'removePage': this.removePage
  };

  constructor(private http: HttpClient) {
  }

  createPage(websiteId: string, page) {
    const url = '/api/website/' + websiteId + '/page';
    return this.http.post<Page>(url, page);
  }

  findPageByWebsiteId(websiteId: string) {
    const url = '/api/website/' + websiteId + '/page';
    return this.http.get<Page[]>(url);
  }

  findPageById(pageId: string) {
    const url = '/api/page/' + pageId;
    return this.http.get<Page>(url);
  }

  updatePage(pageId: string, page) {
    const url = '/api/page/' + pageId;
    return this.http.put<Page>(url, page);
  }

  removePage(pageId) {
    const url = '/api/page/' + pageId;
    return this.http.delete<Page>(url);
  }
}
