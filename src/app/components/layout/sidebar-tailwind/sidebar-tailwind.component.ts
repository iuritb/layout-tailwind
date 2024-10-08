import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar-tailwind',
  templateUrl: './sidebar-tailwind.component.html',
  styleUrl: './sidebar-tailwind.component.scss'
})
export class SidebarTailwindComponent {
  isExpanded = true;

  toggleSidebar() {
    this.isExpanded = !this.isExpanded;
  }

}
