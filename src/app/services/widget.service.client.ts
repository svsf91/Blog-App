import {Widget} from '../models/widget.client.model';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class WidgetService {
  widgets: any;
  api = {
    'HEADING': this.createHeaderWidget,
    'IMAGE': this.createImageWidget,
    'YOUTUBE': this.createYouTubeWidget,
    'HTML': this.createHTMLWidget,
    'LINK': this.createLinkWidget,
    'TEXTINPUT': this.createTextInputWidget,
    'LABEL': this.createLabelWidget,
    'BUTTON': this.createButtonWidget,
    'REPEATER': this.createRepeaterWidget,
    'DATATABLE': this.createDataTableWidget,
    'createWidget': this.createWidget,
    'findWidgetsByPageId': this.findWidgetsByPageId,
    'findWidgetById': this.findWidgetById,
    'updateWidget': this.updateWidget,
    'deleteWidget': this.deleteWidget,
    'deleteWidgetsByPage': this.deleteWidgetsByPage,
    'reorderWidgets': this.reorderWidgets
  };

  constructor(private http: HttpClient) {
  }

  createHeaderWidget(widgetId: string, pageId: string, widget) {
    const header = {
      _id: widgetId,
      widgetType: 'HEADING',
      pageId: pageId,
      size: widget.widgetSize,
      name: widget.widgetName,
      text: widget.widgetText
    };
  }

  createLabelWidget(widgetId: string, pageId: string, widget) {
  }

  createHTMLWidget(widgetId: string, pageId: string, widget) {
    return {
      _id: widgetId,
      widgetType: 'HTML',
      pageId: pageId,
      name: widget.name,
      text: widget.text
    };
  }

  createTextInputWidget(widgetId, pageId, widget) {
  }

  createLinkWidget(widgetId, pageId, widget) {
  }

  createButtonWidget(widgetId, pageId, widget) {
  }

  createImageWidget(widgetId: string, pageId: string, widget) {
    return {
      _id: widgetId,
      widgetType: 'IMAGE',
      pageId: pageId,
      width: widget.width,
      url: widget.url,
      name: widget.name,
      text: widget.text
    };

  }

  createYouTubeWidget(widgetId: string, pageId: string, widget) {
    return {
      _id: widgetId,
      widgetType: 'YOUTUBE',
      pageId: pageId,
      name: widget.name,
      text: widget.text,
      width: widget.width,
      url: widget.url
    };

  }

  createDataTableWidget(widgetId, pageId, widget) {

  }

  createRepeaterWidget(widgetId, pageId, widget) {

  }


  /*
   * Standard CRUD
   */
  createWidget(pageId: string, widget) {
    const url = '/api/page/' + pageId + '/widget';
    return this.http.post<Widget>(url, widget);
  }

  findWidgetsByPageId(pageId) {
    const url = '/api/page/' + pageId + '/widget';
    return this.http.get<Widget[]>(url);
  }

  findWidgetById(widgetId: string) {
    const url = '/api/widget/' + widgetId;
    return this.http.get<Widget>(url);
  }

  updateWidget(widgetId: string, widget) {
    const url = '/api/widget/' + widgetId;
    return this.http.put<Widget>(url, widget);
  }

  deleteWidget(widgetId) {
    const url = '/api/widget/' + widgetId;
    return this.http.delete<Widget>(url);
  }

  deleteWidgetsByPage(pageId) {
    this.findWidgetsByPageId(pageId).subscribe(
      response => this.widgets = response);
    for (const widget in this.widgets) {
      if (widget['pageId'] === pageId) {
        this.deleteWidget(widget['_id']);
      }
    }

  }

  reorderWidgets(pageId, start, end) {
    const url = '/api/page/' + pageId + '/widget?initial=' + start + '&final=' + end;
    return this.http.put<Widget>(url, '');
  }
}
