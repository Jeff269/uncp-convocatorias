import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPlazasComponent } from './admin-plazas.component';

describe('AdminPlazasComponent', () => {
  let component: AdminPlazasComponent;
  let fixture: ComponentFixture<AdminPlazasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPlazasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPlazasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
