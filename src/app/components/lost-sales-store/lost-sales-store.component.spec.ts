import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LostSalesStoreComponent } from './lost-sales-store.component';

describe('LostSalesStoreComponent', () => {
  let component: LostSalesStoreComponent;
  let fixture: ComponentFixture<LostSalesStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LostSalesStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LostSalesStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
