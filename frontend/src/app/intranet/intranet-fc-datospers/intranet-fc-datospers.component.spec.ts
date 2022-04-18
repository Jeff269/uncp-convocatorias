import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntranetFcDatospersComponent } from './intranet-fc-datospers.component';

describe('IntranetFcDatospersComponent', () => {
  let component: IntranetFcDatospersComponent;
  let fixture: ComponentFixture<IntranetFcDatospersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntranetFcDatospersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntranetFcDatospersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
