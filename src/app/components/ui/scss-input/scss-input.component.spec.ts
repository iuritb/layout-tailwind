import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScssInputComponent } from './scss-input.component';

describe('ScssInputComponent', () => {
  let component: ScssInputComponent;
  let fixture: ComponentFixture<ScssInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScssInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScssInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
