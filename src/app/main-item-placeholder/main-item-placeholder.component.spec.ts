import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainItemPlaceholderComponent } from './main-item-placeholder.component';

describe('MainItemPlaceholderComponent', () => {
  let component: MainItemPlaceholderComponent;
  let fixture: ComponentFixture<MainItemPlaceholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainItemPlaceholderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainItemPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
