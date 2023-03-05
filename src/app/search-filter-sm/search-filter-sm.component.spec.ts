import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFilterSmComponent } from './search-filter-sm.component';

describe('SearchFilterSmComponent', () => {
  let component: SearchFilterSmComponent;
  let fixture: ComponentFixture<SearchFilterSmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchFilterSmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchFilterSmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
