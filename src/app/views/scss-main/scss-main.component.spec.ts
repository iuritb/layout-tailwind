import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScssMainComponent } from './scss-main.component';

describe('ScssMainComponent', () => {
  let component: ScssMainComponent;
  let fixture: ComponentFixture<ScssMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScssMainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScssMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
