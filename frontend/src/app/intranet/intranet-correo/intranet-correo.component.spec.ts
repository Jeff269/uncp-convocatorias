import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntranetCorreoComponent } from './intranet-correo.component';

describe('IntranetCorreoComponent', () => {
  let component: IntranetCorreoComponent;
  let fixture: ComponentFixture<IntranetCorreoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntranetCorreoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntranetCorreoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
