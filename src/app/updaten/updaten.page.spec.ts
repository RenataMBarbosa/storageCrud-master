import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatenPage } from './updaten.page';

describe('UpdatenPage', () => {
  let component: UpdatenPage;
  let fixture: ComponentFixture<UpdatenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatenPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
