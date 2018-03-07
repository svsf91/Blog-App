import {Component, Input, OnInit} from '@angular/core';
import {Widget} from '../../../../models/widget.client.model';

@Component({
  selector: 'app-image-view',
  templateUrl: './image-view.component.html',
  styleUrls: ['./image-view.component.css', '../../../../app.component.css']
})
export class ImageViewComponent implements OnInit {
  @Input() widget: Widget;
  constructor() { }

  ngOnInit() {
  }

}
