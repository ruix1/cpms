import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CiscoComponent } from './cisco.component';

describe('CiscoComponent', () => {
  let component: CiscoComponent;
  let fixture: ComponentFixture<CiscoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CiscoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CiscoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
