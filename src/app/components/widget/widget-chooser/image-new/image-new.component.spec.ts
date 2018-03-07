import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageNewComponent } from './image-new.component';

describe('ImageNewComponent', () => {
  let component: ImageNewComponent;
  let fixture: ComponentFixture<ImageNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
