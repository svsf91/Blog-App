import {User} from './user.client.model';

export class Page {
  constructor(public name: string,
              public _id?: string,
              public dateCreated?: Date) {}
}
