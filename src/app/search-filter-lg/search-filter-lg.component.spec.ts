import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFilterLgComponent } from './search-filter-lg.component';

describe('MainCategoriesLgComponent', () => {
  let component: SearchFilterLgComponent;
  let fixture: ComponentFixture<SearchFilterLgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchFilterLgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchFilterLgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
