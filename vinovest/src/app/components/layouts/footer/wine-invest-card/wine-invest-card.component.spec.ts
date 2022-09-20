import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WineInvestCardComponent } from './wine-invest-card.component';

describe('WineInvestCardComponent', () => {
  let component: WineInvestCardComponent;
  let fixture: ComponentFixture<WineInvestCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WineInvestCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WineInvestCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
