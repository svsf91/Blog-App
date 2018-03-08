import {Page} from './page.client.model';

export class Widget {
  constructor
  (public name: string,
   public width?: string,
   public rows?: number,
   public size?: number,
   public formatted?: boolean,
   public type?: string,
   public _page?: Page,
   public text?: string,
   public placeholder?: string,
   public description?: string,
   public url?: string,
   public height?: string,
   public widgetClass?: string,
   public icon?: string,
   public deletable?: boolean,
   public dateCreated?: Date,
   public _id?: string) {
  }
}
