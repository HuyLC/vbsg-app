import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VbsgComponent } from './vbsg.component';

describe('VbsgComponent', () => {
  let component: VbsgComponent;
  let fixture: ComponentFixture<VbsgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VbsgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VbsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
