import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnMoreBtnComponent } from './learn-more-btn.component';

describe('LearnMoreBtnComponent', () => {
  let component: LearnMoreBtnComponent;
  let fixture: ComponentFixture<LearnMoreBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearnMoreBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnMoreBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
