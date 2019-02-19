import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LostSalesComponent } from './lost-sales.component';

describe('LostSalesComponent', () => {
  let component: LostSalesComponent;
  let fixture: ComponentFixture<LostSalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LostSalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LostSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
