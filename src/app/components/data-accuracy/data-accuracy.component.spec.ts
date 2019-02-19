import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataAccuracyComponent } from './data-accuracy.component';

describe('DataAccuracyComponent', () => {
  let component: DataAccuracyComponent;
  let fixture: ComponentFixture<DataAccuracyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataAccuracyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataAccuracyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
