import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LostSalesPercentVsUnitComponent } from './lost-sales-percent-vs-unit.component';

describe('LostSalesPercentVsUnitComponent', () => {
  let component: LostSalesPercentVsUnitComponent;
  let fixture: ComponentFixture<LostSalesPercentVsUnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LostSalesPercentVsUnitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LostSalesPercentVsUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
