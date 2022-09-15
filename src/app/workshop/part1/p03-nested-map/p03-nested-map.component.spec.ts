import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P03NestedMapComponent } from './p03nested-map.component';

describe('P03nestedMapComponent', () => {
  let component: P03NestedMapComponent;
  let fixture: ComponentFixture<P03NestedMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P03NestedMapComponent ],
    })
      .compileComponents();

    fixture = TestBed.createComponent(P03NestedMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
