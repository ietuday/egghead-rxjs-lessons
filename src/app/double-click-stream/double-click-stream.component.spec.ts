import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleClickStreamComponent } from './double-click-stream.component';

describe('DoubleClickStreamComponent', () => {
  let component: DoubleClickStreamComponent;
  let fixture: ComponentFixture<DoubleClickStreamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoubleClickStreamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoubleClickStreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
