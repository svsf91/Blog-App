import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetChooserComponent } from './widget-chooser.component';

describe('WidgetChooserComponent', () => {
  let component: WidgetChooserComponent;
  let fixture: ComponentFixture<WidgetChooserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetChooserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetChooserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
