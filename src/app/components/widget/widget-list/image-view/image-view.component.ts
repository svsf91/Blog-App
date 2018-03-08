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
    if (this.widget.width < 800) {
      this.widget.width = 800;
    }
  }

  getImageUrl() {
    return this.sanitizer.bypassSecurityTrustUrl(this.widget.url);
  }
}
