import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminConvocatoriasComponent } from './admin-convocatorias.component';

describe('AdminConvocatoriasComponent', () => {
  let component: AdminConvocatoriasComponent;
  let fixture: ComponentFixture<AdminConvocatoriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminConvocatoriasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminConvocatoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
