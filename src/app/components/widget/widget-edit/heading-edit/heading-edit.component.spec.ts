import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadingEditComponent } from './heading-edit.component';

describe('HeadingEditComponent', () => {
  let component: HeadingEditComponent;
  let fixture: ComponentFixture<HeadingEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadingEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadingEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
