import {Component, Input, OnInit} from '@angular/core';
import {Widget} from '../../../../models/widget.client.model';

@Component({
  selector: 'app-heading-edit',
  templateUrl: './heading-edit.component.html',
  styleUrls: ['./heading-edit.component.css']
})
export class HeadingEditComponent implements OnInit {
  @Input() widget: Widget;
  constructor() { }

  ngOnInit() {
  }

}
