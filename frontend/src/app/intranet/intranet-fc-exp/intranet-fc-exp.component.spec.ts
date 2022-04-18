import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntranetFcExpComponent } from './intranet-fc-exp.component';

describe('IntranetFcExpComponent', () => {
  let component: IntranetFcExpComponent;
  let fixture: ComponentFixture<IntranetFcExpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntranetFcExpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntranetFcExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
