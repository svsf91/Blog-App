import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeNewComponent } from './youtube-new.component';

describe('YoutubeNewComponent', () => {
  let component: YoutubeNewComponent;
  let fixture: ComponentFixture<YoutubeNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YoutubeNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubeNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
