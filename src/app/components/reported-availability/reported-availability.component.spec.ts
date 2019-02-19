import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportedAvailabilityComponent } from './reported-availability.component';

describe('ReportedAvailabilityComponent', () => {
  let component: ReportedAvailabilityComponent;
  let fixture: ComponentFixture<ReportedAvailabilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportedAvailabilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportedAvailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
