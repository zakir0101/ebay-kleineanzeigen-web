import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaveToLoginComponent } from './have-to-login.component';

describe('HaveToLoginComponent', () => {
  let component: HaveToLoginComponent;
  let fixture: ComponentFixture<HaveToLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HaveToLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HaveToLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
