import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntranetLoginComponent } from './intranet-login.component';

describe('IntranetLoginComponent', () => {
  let component: IntranetLoginComponent;
  let fixture: ComponentFixture<IntranetLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntranetLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntranetLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
