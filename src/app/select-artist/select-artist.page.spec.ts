import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectArtistPage } from './select-artist.page';

describe('SelectArtistPage', () => {
  let component: SelectArtistPage;
  let fixture: ComponentFixture<SelectArtistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectArtistPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectArtistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
