import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubstitutionWhenProductIsOOSComponent } from './substitution-when-product-is-oos.component';

describe('SubstitutionWhenProductIsOOSComponent', () => {
  let component: SubstitutionWhenProductIsOOSComponent;
  let fixture: ComponentFixture<SubstitutionWhenProductIsOOSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubstitutionWhenProductIsOOSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubstitutionWhenProductIsOOSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
