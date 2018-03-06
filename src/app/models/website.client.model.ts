import {User} from './user.client.model';
import {Page} from './page.client.model';

export class Website {
  constructor(public name: string,
              public description?: string,
              public _user?: User,
              public _id?: string,
              public pages?: Page[],
              public dateCreated?: Date) {}
}
