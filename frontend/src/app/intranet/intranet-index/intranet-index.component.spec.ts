import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntranetIndexComponent } from './intranet-index.component';

describe('IntranetIndexComponent', () => {
  let component: IntranetIndexComponent;
  let fixture: ComponentFixture<IntranetIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntranetIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntranetIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
