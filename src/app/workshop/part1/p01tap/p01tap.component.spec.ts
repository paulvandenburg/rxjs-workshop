import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P01tapComponent } from './p01tap.component';

describe('P01tapComponent', () => {
  let component: P01tapComponent;
  let fixture: ComponentFixture<P01tapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P01tapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(P01tapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
