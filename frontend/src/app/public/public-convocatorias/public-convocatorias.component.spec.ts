import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicConvocatoriasComponent } from './public-convocatorias.component';

describe('PublicConvocatoriasComponent', () => {
  let component: PublicConvocatoriasComponent;
  let fixture: ComponentFixture<PublicConvocatoriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicConvocatoriasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicConvocatoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
