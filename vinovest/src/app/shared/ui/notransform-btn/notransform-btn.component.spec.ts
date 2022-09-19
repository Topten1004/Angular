import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotransformBtnComponent } from './notransform-btn.component';

describe('NotransformBtnComponent', () => {
  let component: NotransformBtnComponent;
  let fixture: ComponentFixture<NotransformBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotransformBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotransformBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
