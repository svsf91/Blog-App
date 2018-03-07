import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class FlickrService {
  api = {
  };
  constructor(private http: HttpClient) {
  }
  searchPhotos(searchTerm) {
    const key = 'ec08fd646f80ecefb099e5cdbc8a6285';
    const secret = '0e2463f8ca814f12';
    const urlBase = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=' +
      key + '&text=' + searchTerm;
    return this.http.get(urlBase, {responseType: 'text'});
  }
}
