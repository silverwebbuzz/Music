import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindArtistPage } from './find-artist.page';

describe('FindArtistPage', () => {
  let component: FindArtistPage;
  let fixture: ComponentFixture<FindArtistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindArtistPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindArtistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
