import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntersectExampleComponent } from './intersect-example.component';

describe('IntersectExampleComponent', () => {
  let component: IntersectExampleComponent;
  let fixture: ComponentFixture<IntersectExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntersectExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntersectExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
