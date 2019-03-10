import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DougnutPage } from './dougnut.page';

describe('DougnutPage', () => {
  let component: DougnutPage;
  let fixture: ComponentFixture<DougnutPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DougnutPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DougnutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
