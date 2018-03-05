import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

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
    return this.http.post(url, page);
  }

  findPageByWebsiteId(websiteId: string) {
    const url = '/api/website/' + websiteId + '/page';
    return this.http.get(url);
  }

  findPageById(pageId: string) {
    const url = '/api/page' + pageId;
    return this.http.get(url);
  }

  updatePage(pageId: string, page) {
    const url = '/api/page/' + pageId;
    return this.http.put(url, page);
  }

  removePage(pageId) {
    const url = '/api/page/' + pageId;
    return this.http.delete(url);
  }
}
