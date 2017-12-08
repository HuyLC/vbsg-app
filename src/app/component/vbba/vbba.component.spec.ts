import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VbbaComponent } from './vbba.component';

describe('VbbaComponent', () => {
  let component: VbbaComponent;
  let fixture: ComponentFixture<VbbaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VbbaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VbbaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
