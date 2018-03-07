import {Component, Input, OnInit} from '@angular/core';
import {Widget} from '../../../../models/widget.client.model';

@Component({
  selector: 'app-image-edit',
  templateUrl: './image-edit.component.html',
  styleUrls: ['./image-edit.component.css']
})
export class ImageEditComponent implements OnInit {
  @Input() widget: Widget;

  constructor() { }

  ngOnInit() {
  }

}
