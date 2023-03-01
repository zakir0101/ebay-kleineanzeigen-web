import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppbarSmComponent } from './appbar-sm.component';

describe('AppbarSmComponent', () => {
  let component: AppbarSmComponent;
  let fixture: ComponentFixture<AppbarSmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppbarSmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppbarSmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
