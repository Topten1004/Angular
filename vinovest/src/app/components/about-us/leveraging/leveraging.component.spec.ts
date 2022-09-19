import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeveragingComponent } from './leveraging.component';

describe('LeveragingComponent', () => {
  let component: LeveragingComponent;
  let fixture: ComponentFixture<LeveragingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeveragingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeveragingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
