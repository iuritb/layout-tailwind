import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScssSidebarComponent } from './scss-sidebar.component';

describe('ScssSidebarComponent', () => {
  let component: ScssSidebarComponent;
  let fixture: ComponentFixture<ScssSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScssSidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScssSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
