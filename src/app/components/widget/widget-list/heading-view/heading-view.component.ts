import {Component, Input, OnInit} from '@angular/core';
import {Widget} from '../../../../models/widget.client.model';

@Component({
  selector: 'app-heading-view',
  templateUrl: './heading-view.component.html',
  styleUrls: ['./heading-view.component.css', '../../../../app.component.css']
})
export class HeadingViewComponent implements OnInit {
  @Input() widget: Widget;
  constructor() { }

  ngOnInit() {
  }

}
