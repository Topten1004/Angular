import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailBtnComponent } from './email-btn.component';

describe('EmailBtnComponent', () => {
  let component: EmailBtnComponent;
  let fixture: ComponentFixture<EmailBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
