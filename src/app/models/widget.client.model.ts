import {Page} from './page.client.model';

export class Widget {
  constructor
  (public name: string,
   public width?: number,
   public formatted?: boolean,
   public rows?: number,
   public type?: string,
   public _page?: Page,
   public text?: string,
   public placeholder?: string,
   public description?: string,
   public url?: string,
   public height?: string,
   public size?: number,
   public widgetClass?: string,
   public icon?: string,
   public deletable?: boolean,
   public dateCreated?: Date,
   public _id?: string) {
  }
}
