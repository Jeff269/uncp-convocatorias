import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDependenciasComponent } from './admin-dependencias.component';

describe('AdminDependenciasComponent', () => {
  let component: AdminDependenciasComponent;
  let fixture: ComponentFixture<AdminDependenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDependenciasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDependenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
