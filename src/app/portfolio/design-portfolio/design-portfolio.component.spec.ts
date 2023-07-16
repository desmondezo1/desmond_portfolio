import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignPortfolioComponent } from './design-portfolio.component';

describe('DesignPortfolioComponent', () => {
  let component: DesignPortfolioComponent;
  let fixture: ComponentFixture<DesignPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignPortfolioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
