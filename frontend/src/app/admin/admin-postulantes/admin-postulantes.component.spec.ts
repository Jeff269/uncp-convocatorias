import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPostulantesComponent } from './admin-postulantes.component';

describe('AdminPostulantesComponent', () => {
  let component: AdminPostulantesComponent;
  let fixture: ComponentFixture<AdminPostulantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPostulantesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPostulantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
