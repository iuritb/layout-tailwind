import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatStarratingComponent } from './chat-starrating.component';

describe('ChatStarratingComponent', () => {
  let component: ChatStarratingComponent;
  let fixture: ComponentFixture<ChatStarratingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChatStarratingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChatStarratingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
