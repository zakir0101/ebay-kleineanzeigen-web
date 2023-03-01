import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainGalerieComponent } from './main-galerie.component';

describe('MainGalerieComponent', () => {
  let component: MainGalerieComponent;
  let fixture: ComponentFixture<MainGalerieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainGalerieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainGalerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
