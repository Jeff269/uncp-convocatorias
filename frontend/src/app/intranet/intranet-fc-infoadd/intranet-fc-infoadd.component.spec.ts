import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntranetFcInfoaddComponent } from './intranet-fc-infoadd.component';

describe('IntranetFcInfoaddComponent', () => {
  let component: IntranetFcInfoaddComponent;
  let fixture: ComponentFixture<IntranetFcInfoaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntranetFcInfoaddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntranetFcInfoaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
