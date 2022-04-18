import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicContactoComponent } from './public-contacto.component';

describe('PublicContactoComponent', () => {
  let component: PublicContactoComponent;
  let fixture: ComponentFixture<PublicContactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicContactoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
