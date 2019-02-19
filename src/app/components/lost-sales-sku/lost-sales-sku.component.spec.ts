import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LostSalesSkuComponent } from './lost-sales-sku.component';

describe('LostSalesSkuComponent', () => {
  let component: LostSalesSkuComponent;
  let fixture: ComponentFixture<LostSalesSkuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LostSalesSkuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LostSalesSkuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
