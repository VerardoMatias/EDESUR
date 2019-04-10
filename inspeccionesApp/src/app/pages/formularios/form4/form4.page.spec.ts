import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Form4Page } from './form4.page';

describe('Form4Page', () => {
  let component: Form4Page;
  let fixture: ComponentFixture<Form4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Form4Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Form4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
