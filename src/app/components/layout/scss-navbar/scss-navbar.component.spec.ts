import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScssNavbarComponent } from './scss-navbar.component';

describe('ScssNavbarComponent', () => {
  let component: ScssNavbarComponent;
  let fixture: ComponentFixture<ScssNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScssNavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScssNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
