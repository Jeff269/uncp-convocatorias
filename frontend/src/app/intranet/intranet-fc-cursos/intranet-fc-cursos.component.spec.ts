import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntranetFcCursosComponent } from './intranet-fc-cursos.component';

describe('IntranetFcCursosComponent', () => {
  let component: IntranetFcCursosComponent;
  let fixture: ComponentFixture<IntranetFcCursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntranetFcCursosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntranetFcCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
