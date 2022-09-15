import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P04ErrorsComponent } from './p04-errors.component';

describe('P04ErrorsComponent', () => {
  let component: P04ErrorsComponent;
  let fixture: ComponentFixture<P04ErrorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P04ErrorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(P04ErrorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
