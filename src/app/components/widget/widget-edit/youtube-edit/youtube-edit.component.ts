import {Component, Input, OnInit} from '@angular/core';
import {Widget} from '../../../../models/widget.client.model';

@Component({
  selector: 'app-youtube-edit',
  templateUrl: './youtube-edit.component.html',
  styleUrls: ['./youtube-edit.component.css', '../../../../app.component.css']
})
export class YoutubeEditComponent implements OnInit {
  @Input() widget: Widget;
  constructor() { }

  ngOnInit() {
  }
  updateWidget() {
  }
}
