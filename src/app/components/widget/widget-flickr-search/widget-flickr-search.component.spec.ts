import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetFlickrSearchComponent } from './widget-flickr-search.component';

describe('WidgetFlickrSearchComponent', () => {
  let component: WidgetFlickrSearchComponent;
  let fixture: ComponentFixture<WidgetFlickrSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetFlickrSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetFlickrSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
