import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntranetUpdatepassComponent } from './intranet-updatepass.component';

describe('IntranetUpdatepassComponent', () => {
  let component: IntranetUpdatepassComponent;
  let fixture: ComponentFixture<IntranetUpdatepassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntranetUpdatepassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntranetUpdatepassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
