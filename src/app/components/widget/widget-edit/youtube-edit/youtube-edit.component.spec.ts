import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeEditComponent } from './youtube-edit.component';

describe('YoutubeEditComponent', () => {
  let component: YoutubeEditComponent;
  let fixture: ComponentFixture<YoutubeEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YoutubeEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
