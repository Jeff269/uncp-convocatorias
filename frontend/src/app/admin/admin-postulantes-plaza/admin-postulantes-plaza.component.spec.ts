import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPostulantesPlazaComponent } from './admin-postulantes-plaza.component';

describe('AdminPostulantesPlazaComponent', () => {
  let component: AdminPostulantesPlazaComponent;
  let fixture: ComponentFixture<AdminPostulantesPlazaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPostulantesPlazaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPostulantesPlazaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
