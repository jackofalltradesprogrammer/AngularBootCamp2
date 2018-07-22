import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleHttpComponent } from './sample-http.component';

describe('SampleHttpComponent', () => {
  let component: SampleHttpComponent;
  let fixture: ComponentFixture<SampleHttpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleHttpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
