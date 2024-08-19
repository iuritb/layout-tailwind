import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarTailwindComponent } from './sidebar-tailwind.component';

describe('SidebarTailwindComponent', () => {
  let component: SidebarTailwindComponent;
  let fixture: ComponentFixture<SidebarTailwindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidebarTailwindComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarTailwindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
