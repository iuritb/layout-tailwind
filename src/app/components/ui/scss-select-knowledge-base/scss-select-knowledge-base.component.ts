import { Component } from '@angular/core';

@Component({
  selector: 'app-scss-select-knowledge-base',
  templateUrl: './scss-select-knowledge-base.component.html',
  styleUrl: './scss-select-knowledge-base.component.scss'
})
export class ScssSelectKnowledgeBaseComponent {

  selectedValue: string = '';

  onSelectChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.selectedValue = target.value;
  }

}
