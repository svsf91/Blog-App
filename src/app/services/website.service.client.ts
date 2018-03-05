import {Website} from '../models/Website';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class WebsiteService {
  constructor(private http: HttpClient) {
  }

  api = {
//    'getNextId': this.getNextId,
    'createWebsite': this.createWebsite,
    'findAllWebsitesForUser': this.findAllWebsitesForUser,
    'findWebsiteById': this.findWebsiteById,
    'updateWebsite': this.updateWebsite,
    'removeWebsite': this.removeWebsite
  };

  // getMaxId() {
  //   function getMaxId(maxId, currentId) {
  //     let current = parseInt(currentId._id);
  //     if(maxId > current) {
  //       return maxId;
  //     } else {
  //       return current + 1;
  //     }
  //   }
  //   return websites.reduce(getMaxId, 0).toString();
  // }
  createWebsite(userId: string, website) {
    const url = '/api/user/' + userId + '/website';
    return this.http.post(url, website);
  }

  findAllWebsitesForUser(userId: string) {
    const url = '/api/user/' + userId + '/website';
    return this.http.get(url);
  }

  findWebsiteById(websiteId: string) {
    const url = '/api/website/' + websiteId;
    return this.http.get(url);
  }

  updateWebsite(websiteId: string, website) {
    const url = '/api/website/' + websiteId;
    return this.http.put(url, website);
  }

  removeWebsite(websiteId: string) {
    const url = '/api/website/' + websiteId;
    return this.http.delete(url);
  }
}
