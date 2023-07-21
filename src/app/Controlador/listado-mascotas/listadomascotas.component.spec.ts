import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadomascotasComponent } from './listadomascotas.component';

describe('ListadomascotasComponent', () => {
  let component: ListadomascotasComponent;
  let fixture: ComponentFixture<ListadomascotasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListadomascotasComponent]
    });
    fixture = TestBed.createComponent(ListadomascotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
