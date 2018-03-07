import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { Routing } from './app.routing';
import { ProfileComponent } from './components/user/profile/profile.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { WebsiteEditComponent } from './components/website/website-edit/website-edit.component';
import { WebsiteListComponent } from './components/website/website-list/website-list.component';
import { WebsiteNewComponent } from './components/website/website-new/website-new.component';
import { PageEditComponent } from './components/page/page-edit/page-edit.component';
import { PageNewComponent } from './components/page/page-new/page-new.component';
import { PageListComponent } from './components/page/page-list/page-list.component';
import { WidgetChooserComponent } from './components/widget/widget-chooser/widget-chooser.component';
import { WidgetEditComponent } from './components/widget/widget-edit/widget-edit.component';
import { WidgetListComponent } from './components/widget/widget-list/widget-list.component';
import {UserService} from './services/user.service.client';
import {WebsiteService} from './services/website.service.client';
import {PageService} from './services/page.service.client';
import {WidgetService} from './services/widget.service.client';
import {HttpClientModule} from '@angular/common/http';
import {StatusService} from './services/status.service.client';
import { HeadingViewComponent } from './components/widget/widget-list/heading-view/heading-view.component';
import { ImageViewComponent } from './components/widget/widget-list/image-view/image-view.component';
import { YoutubeViewComponent } from './components/widget/widget-list/youtube-view/youtube-view.component';
import { HeadingNewComponent } from './components/widget/widget-chooser/heading-new/heading-new.component';
import { ImageNewComponent } from './components/widget/widget-chooser/image-new/image-new.component';
import { YoutubeNewComponent } from './components/widget/widget-chooser/youtube-new/youtube-new.component';
import { HeadingEditComponent } from './components/widget/widget-edit/heading-edit/heading-edit.component';
import { ImageEditComponent } from './components/widget/widget-edit/image-edit/image-edit.component';
import { YoutubeEditComponent } from './components/widget/widget-edit/youtube-edit/youtube-edit.component';
import { WidgetFlickrSearchComponent } from './components/widget/widget-flickr-search/widget-flickr-search.component';
import {FlickrService} from './services/flickr.service.client';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    WebsiteEditComponent,
    WebsiteListComponent,
    WebsiteNewComponent,
    PageEditComponent,
    PageNewComponent,
    PageListComponent,
    WidgetChooserComponent,
    WidgetEditComponent,
    WidgetListComponent,
    HeadingViewComponent,
    ImageViewComponent,
    YoutubeViewComponent,
    HeadingNewComponent,
    ImageNewComponent,
    YoutubeNewComponent,
    HeadingEditComponent,
    ImageEditComponent,
    YoutubeEditComponent,
    WidgetFlickrSearchComponent,
  ],
  imports: [
    BrowserModule,
    Routing,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [UserService, WebsiteService, PageService, WidgetService, StatusService, FlickrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
