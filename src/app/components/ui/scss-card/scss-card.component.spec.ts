import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScssCardComponent } from './scss-card.component';

describe('ScssCardComponent', () => {
  let component: ScssCardComponent;
  let fixture: ComponentFixture<ScssCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScssCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScssCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
