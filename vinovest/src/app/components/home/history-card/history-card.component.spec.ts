import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryCardComponent } from './history-card.component';

describe('HistoryCardComponent', () => {
  let component: HistoryCardComponent;
  let fixture: ComponentFixture<HistoryCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
