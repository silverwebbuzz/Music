import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindLoadingPage } from './find-loading.page';

describe('FindLoadingPage', () => {
  let component: FindLoadingPage;
  let fixture: ComponentFixture<FindLoadingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindLoadingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindLoadingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
