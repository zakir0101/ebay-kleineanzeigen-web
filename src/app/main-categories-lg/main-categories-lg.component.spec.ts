import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCategoriesLgComponent } from './main-categories-lg.component';

describe('MainCategoriesLgComponent', () => {
  let component: MainCategoriesLgComponent;
  let fixture: ComponentFixture<MainCategoriesLgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainCategoriesLgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainCategoriesLgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
