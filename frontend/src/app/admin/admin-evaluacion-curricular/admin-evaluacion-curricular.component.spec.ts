import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEvaluacionCurricularComponent } from './admin-evaluacion-curricular.component';

describe('AdminEvaluacionCurricularComponent', () => {
  let component: AdminEvaluacionCurricularComponent;
  let fixture: ComponentFixture<AdminEvaluacionCurricularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEvaluacionCurricularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEvaluacionCurricularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
