import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScssDialogChatConfigurationComponent } from './scss-dialog-chat-configuration.component';

describe('ScssDialogChatConfigurationComponent', () => {
  let component: ScssDialogChatConfigurationComponent;
  let fixture: ComponentFixture<ScssDialogChatConfigurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScssDialogChatConfigurationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScssDialogChatConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
