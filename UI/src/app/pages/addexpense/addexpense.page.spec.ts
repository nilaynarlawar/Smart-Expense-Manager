import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddexpensePage } from './addexpense.page';

describe('AddexpensePage', () => {
  let component: AddexpensePage;
  let fixture: ComponentFixture<AddexpensePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddexpensePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddexpensePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
