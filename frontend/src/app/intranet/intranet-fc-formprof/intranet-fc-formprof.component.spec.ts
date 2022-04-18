import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntranetFcFormprofComponent } from './intranet-fc-formprof.component';

describe('IntranetFcFormprofComponent', () => {
  let component: IntranetFcFormprofComponent;
  let fixture: ComponentFixture<IntranetFcFormprofComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntranetFcFormprofComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntranetFcFormprofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
