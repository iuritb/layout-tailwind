import { Component } from '@angular/core';

@Component({
  selector: 'app-chat-history',
  templateUrl: './chat-history.component.html',
  styleUrl: './chat-history.component.css'
})
export class ChatHistoryComponent {
  chats = [
    { name: 'Chat 1', timestamp: '15:30, 10/09/2024' },
    { name: 'Chat 2', timestamp: '12:00, 09/09/2024' },
    { name: 'Chat 3', timestamp: '18:15, 08/09/2024' },
    // Mais itens podem ser adicionados aqui
  ];

  selectChat(chat: any) {
    console.log('Selecionando o chat:', chat);
    // Aqui você poderá integrar com o back-end para abrir a conversa selecionada
  }
}
