//Angular 
import { Component, EventEmitter, Output } from '@angular/core';
import * as marked from 'marked';

@Component({
  selector: 'app-markdown-editor',
  templateUrl: './markdown-editor.component.html',
  styleUrls: ['./markdown-editor.component.scss']
})
export class MarkdownEditorComponent {
  markdownContent: string = 'Escreva sua mensagem aqui...';

  @Output() markdownChange = new EventEmitter<string>();

  async getFormattedMarkdown(): Promise<string> {
    const parsedContent = await marked.parse(this.markdownContent);
    return parsedContent.replace(/<pre>/g, '<pre class="code-block">');
  }

  updateContent(event: Event): void {
    const input = event.target as HTMLTextAreaElement;
    this.markdownContent = input.value;
    this.markdownChange.emit(this.markdownContent);
  }

  copyToClipboard(): void {
    navigator.clipboard.writeText(this.markdownContent).then(() => {
      alert('Texto copiado para a área de transferência!');
    });
  }
}
