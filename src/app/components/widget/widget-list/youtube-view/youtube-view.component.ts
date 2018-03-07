import {Component, Input, OnInit} from '@angular/core';
import {Widget} from '../../../../models/widget.client.model';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-youtube-view',
  templateUrl: './youtube-view.component.html',
  styleUrls: ['./youtube-view.component.css', '../../../../app.component.css']
})
export class YoutubeViewComponent implements OnInit {
  @Input() widget: Widget;
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }
  getYoutubeEmbedUrl(linkUrl) {
    let embedUrl = 'https://www.youtube.com/embed/';
    const linkUrlParts = linkUrl.split('/');
    embedUrl += linkUrlParts[linkUrlParts.length - 1];
    return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
  }
}
