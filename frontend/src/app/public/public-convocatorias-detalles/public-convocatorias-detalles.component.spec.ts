import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicConvocatoriasDetallesComponent } from './public-convocatorias-detalles.component';

describe('PublicConvocatoriasDetallesComponent', () => {
  let component: PublicConvocatoriasDetallesComponent;
  let fixture: ComponentFixture<PublicConvocatoriasDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicConvocatoriasDetallesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicConvocatoriasDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
