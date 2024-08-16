import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScssChatComponent } from './scss-chat.component';

describe('ScssChatComponent', () => {
  let component: ScssChatComponent;
  let fixture: ComponentFixture<ScssChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScssChatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScssChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
