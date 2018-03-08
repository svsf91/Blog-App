import {Component, Input, OnInit} from '@angular/core';
import {Widget} from '../../../../models/widget.client.model';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-image-view',
  templateUrl: './image-view.component.html',
  styleUrls: ['./image-view.component.css', '../../../../app.component.css']
})
export class ImageViewComponent implements OnInit {
  @Input() widget: Widget;

  constructor(private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
  }

  getImageUrl() {
    return this.sanitizer.bypassSecurityTrustUrl(this.widget.url);
  }
}
