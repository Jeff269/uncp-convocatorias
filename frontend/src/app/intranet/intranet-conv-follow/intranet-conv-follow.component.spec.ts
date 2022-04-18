import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntranetConvFollowComponent } from './intranet-conv-follow.component';

describe('IntranetConvFollowComponent', () => {
  let component: IntranetConvFollowComponent;
  let fixture: ComponentFixture<IntranetConvFollowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntranetConvFollowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntranetConvFollowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
