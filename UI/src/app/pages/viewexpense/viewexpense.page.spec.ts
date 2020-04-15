import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewexpensePage } from './viewexpense.page';

describe('ViewexpensePage', () => {
  let component: ViewexpensePage;
  let fixture: ComponentFixture<ViewexpensePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewexpensePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewexpensePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
