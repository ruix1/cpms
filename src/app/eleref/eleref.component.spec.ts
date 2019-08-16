import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElerefComponent } from './eleref.component';

describe('ElerefComponent', () => {
  let component: ElerefComponent;
  let fixture: ComponentFixture<ElerefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElerefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElerefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
