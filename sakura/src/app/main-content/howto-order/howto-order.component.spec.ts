import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowtoOrderComponent } from './howto-order.component';

describe('HowtoOrderComponent', () => {
  let component: HowtoOrderComponent;
  let fixture: ComponentFixture<HowtoOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HowtoOrderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HowtoOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
