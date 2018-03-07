import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadingViewComponent } from './heading-view.component';

describe('HeadingViewComponent', () => {
  let component: HeadingViewComponent;
  let fixture: ComponentFixture<HeadingViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadingViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadingViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
