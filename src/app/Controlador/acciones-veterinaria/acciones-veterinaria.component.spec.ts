import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccionesVeterinariaComponent } from './acciones-veterinaria.component';

describe('AccionesVeterinariaComponent', () => {
  let component: AccionesVeterinariaComponent;
  let fixture: ComponentFixture<AccionesVeterinariaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccionesVeterinariaComponent]
    });
    fixture = TestBed.createComponent(AccionesVeterinariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
