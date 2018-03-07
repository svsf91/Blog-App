import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadingNewComponent } from './heading-new.component';

describe('HeadingNewComponent', () => {
  let component: HeadingNewComponent;
  let fixture: ComponentFixture<HeadingNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadingNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadingNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
