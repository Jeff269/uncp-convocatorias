import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntranetRegisterComponent } from './intranet-register.component';

describe('IntranetRegisterComponent', () => {
  let component: IntranetRegisterComponent;
  let fixture: ComponentFixture<IntranetRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntranetRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntranetRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
