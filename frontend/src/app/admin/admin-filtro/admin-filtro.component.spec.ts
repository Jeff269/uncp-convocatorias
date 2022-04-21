import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFiltroComponent } from './admin-filtro.component';

describe('AdminFiltroComponent', () => {
  let component: AdminFiltroComponent;
  let fixture: ComponentFixture<AdminFiltroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminFiltroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminFiltroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
