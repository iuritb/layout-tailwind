import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScssSelectKnowledgeBaseComponent } from './scss-select-knowledge-base.component';

describe('ScssSelectKnowledgeBaseComponent', () => {
  let component: ScssSelectKnowledgeBaseComponent;
  let fixture: ComponentFixture<ScssSelectKnowledgeBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScssSelectKnowledgeBaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScssSelectKnowledgeBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
