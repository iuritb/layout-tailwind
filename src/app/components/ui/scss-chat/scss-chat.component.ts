import { Component } from '@angular/core';

@Component({
  selector: 'app-scss-chat',
  templateUrl: './scss-chat.component.html',
  styleUrl: './scss-chat.component.scss',
   template: `
    <div *ngIf="isLoading; else messagesContent">
      <!-- Exibe skeletons enquanto está carregando -->
      <app-chat-skeleton></app-chat-skeleton>
      <app-chat-skeleton></app-chat-skeleton>
      <app-chat-skeleton></app-chat-skeleton>
    </div>

    <ng-template #messagesContent>
      <!-- Mensagens reais serão exibidas aqui -->
      <div *ngFor="let message of messages">
        <p>{{ message.text }}</p>
      </div>
    </ng-template>
  `
})
export class ScssChatComponent {
  this.messages = [
    { content: 'Este é um exemplo de **Markdown** com _LaTeX_: $E = mc^2$' },
    { content: 'Aqui vai uma fórmula complexa:\n\n$$\\int_0^\\infty e^{-x^2} dx = \\frac{\\sqrt{\\pi}}{2}$$' }
  ];

   isLoading = true;
  messages = [
    { text: 'Mensagem 1' },
    { text: 'Mensagem 2' },
    { text: 'Mensagem 3' }
  ];

  // Simulando a chegada das mensagens depois de 3 segundos
  constructor() {
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  }


}
