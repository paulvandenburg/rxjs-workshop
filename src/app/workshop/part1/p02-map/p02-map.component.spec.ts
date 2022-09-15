import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P02MapComponent } from './p02-map.component';

describe('P02mapComponent', () => {
  let component: P02MapComponent;
  let fixture: ComponentFixture<P02MapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P02MapComponent ],
    })
      .compileComponents();

    fixture = TestBed.createComponent(P02MapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
