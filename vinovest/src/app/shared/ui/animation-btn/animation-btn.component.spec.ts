import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationBtnComponent } from './animation-btn.component';

describe('AnimationBtnComponent', () => {
  let component: AnimationBtnComponent;
  let fixture: ComponentFixture<AnimationBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimationBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimationBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
