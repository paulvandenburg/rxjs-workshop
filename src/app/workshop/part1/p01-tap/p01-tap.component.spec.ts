import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P01TapComponent } from './p01-tap.component';

describe('P01tapComponent', () => {
  let component: P01TapComponent;
  let fixture: ComponentFixture<P01TapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P01TapComponent ],
    })
      .compileComponents();

    fixture = TestBed.createComponent(P01TapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
