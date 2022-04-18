import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntranetConvAllComponent } from './intranet-conv-all.component';

describe('IntranetConvAllComponent', () => {
  let component: IntranetConvAllComponent;
  let fixture: ComponentFixture<IntranetConvAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntranetConvAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntranetConvAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
