import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P01DebounceComponent } from './p01-debounce.component';

describe('P01DebounceComponent', () => {
  let component: P01DebounceComponent;
  let fixture: ComponentFixture<P01DebounceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P01DebounceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(P01DebounceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
