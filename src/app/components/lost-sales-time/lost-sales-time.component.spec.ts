import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LostSalesTimeComponent } from './lost-sales-time.component';

describe('LostSalesTimeComponent', () => {
  let component: LostSalesTimeComponent;
  let fixture: ComponentFixture<LostSalesTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LostSalesTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LostSalesTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
