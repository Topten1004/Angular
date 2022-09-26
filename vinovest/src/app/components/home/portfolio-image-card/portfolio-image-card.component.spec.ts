import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioImageCardComponent } from './portfolio-image-card.component';

describe('PortfolioImageCardComponent', () => {
  let component: PortfolioImageCardComponent;
  let fixture: ComponentFixture<PortfolioImageCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioImageCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioImageCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
