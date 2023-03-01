import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCategoriesSmComponent } from './main-categories-sm.component';

describe('MainCategoriesSmComponent', () => {
  let component: MainCategoriesSmComponent;
  let fixture: ComponentFixture<MainCategoriesSmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainCategoriesSmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainCategoriesSmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
