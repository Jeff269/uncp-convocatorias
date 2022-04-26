import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntranetConvDetailComponent } from './intranet-conv-detail.component';

describe('IntranetConvDetailComponent', () => {
  let component: IntranetConvDetailComponent;
  let fixture: ComponentFixture<IntranetConvDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntranetConvDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntranetConvDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
