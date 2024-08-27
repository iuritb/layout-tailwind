//Angular
import { Component, EventEmitter, Output, Input, OnInit, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';

//Services
import { ChatService } from 'src/app/service/chat.service';
import { ApiService } from 'src/app/service/auth.service';

//Types
import { IChat } from 'src/types/chats';
import { IUser } from 'src/types/user';

import { faCopy } from '@fortawesome/free-solid-svg-icons'; // retirar importação quando adicionar icones do sass

@Component({
  selector: 'app-chatbox-input',
  templateUrl: './chatbox-input.component.html',
  styleUrls: ['./chatbox-input.component.scss']
})
export class ChatboxInputComponent implements OnInit, AfterViewChecked {
  messages: { text: string; sender: 'user' | 'bot' }[] = [];
  userInput: string = '';
  resetEditorContent: boolean = false;
  isSendingMessage: boolean = false;
  faCopy = faCopy; // Adicione essa linha

  @ViewChild('messagesContainer') private messagesContainer!: ElementRef;

  @Output() chatCreated = new EventEmitter<IChat>(); // Evento para emitir quando um novo chat for criado
  @Input() newChatTrigger: EventEmitter<void> = new EventEmitter<void>(); // Evento para disparar quando um novo chat for iniciado
  @Input() chatSelected: EventEmitter<IChat> = new EventEmitter<IChat>(); // Evento para disparar quando um chat é selecionado
  @Input() selectedIndex: string | null = null; // Adiciona um @Input para o índice selecionado

  constructor(private chatService: ChatService, private apiService: ApiService) {}

  ngOnInit() {
    this.newChatTrigger.subscribe(() => {
      this.clearMessages();
      this.createNewChat();
    });

    this.chatSelected.subscribe((chat: IChat) => {
      this.loadMessages(chat._id);
    });
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  handleMarkdownChange(markdownContent: string) {
    this.userInput = markdownContent;
  }

  async sendMessage() {
    if (this.userInput.trim()) {
      this.isSendingMessage = true;
      let currentChat = this.chatService.getCurrentChat();
      if (!currentChat) {
        try {
          currentChat = await this.createNewChat();
        } catch (error) {
          console.error('Error creating chat:', error);
          this.isSendingMessage = false;
          return;
        }
      }

      const indexToUse = this.selectedIndex ? this.selectedIndex : 'None'; // Use o índice selecionado ou 'None' se não houver índice

      try {
        // Captura a primeira mensagem e envia para criar o nome do chat
        const messages = await this.chatService.getMessagesByChatId(currentChat._id);
        if (messages.length === 0) {
          console.log(`Sending first message to create chat name: ${this.userInput}`);
          try {
            const chatNameResponse = await this.chatService.createChatName(currentChat._id, this.userInput, indexToUse);
            console.log('Chat name created:', chatNameResponse.description);
          } catch (error) {
            console.error('Error creating chat name:', error);
          }
        }

        const response = await this.chatService.sendMessage(currentChat._id, this.userInput, indexToUse);
        console.log('Bot response:', response);

        // Verificação da estrutura da resposta
        if (response && response.message && response.message.assistant_message && response.message.assistant_message.content) {
          this.messages.push({ text: this.userInput, sender: 'user' }); // Mover mensagem do usuário aqui
          this.messages.push({ text: response.message.assistant_message.content, sender: 'bot' });
        } else {
          console.error('Unexpected response structure:', response);
        }

        this.userInput = ''; // Limpar o campo de entrada
        this.resetEditorContent = true; // Resetar o conteúdo do editor
      } catch (error) {
        console.error('Error sending message:', error);
      } finally {
        this.isSendingMessage = false;
      }
    }
  }

  clearMessages() {
    this.messages = [];
  }

  async createNewChat() {
    const currentUser: IUser | null = this.apiService.getCurrentUser();
    if (!currentUser) {
      throw new Error('No current user found');
    }

    try {
      const newChat = await this.chatService.createChat();
      console.log('New chat created:', newChat);
      this.chatService.setCurrentChat(newChat); // Passando o objeto IChat em vez de apenas o ID
      this.chatCreated.emit(newChat);
      return newChat;
    } catch (error) {
      throw error;
    }
  }

  async loadMessages(chatId: string) {
    try {
      this.clearMessages();
      const messages = await this.chatService.getMessagesByChatId(chatId);
      messages.forEach((msg: any) => {
        if (msg.user_message) {
          this.messages.push({ text: msg.user_message.content, sender: 'user' });
        }
        if (msg.assistant_message) {
          this.messages.push({ text: msg.assistant_message.content, sender: 'bot' });
        }
      });
    } catch (error) {
      console.error('Error loading messages:', error);
    }
  }

  private scrollToBottom(): void {
    try {
      this.messagesContainer.nativeElement.scrollTop = this.messagesContainer.nativeElement.scrollHeight;
    } catch (err) {
      console.error('Scroll to bottom failed:', err);
    }
  }

  getLanguage(text: string): string {
    if (text.includes('import') || text.includes('def')) {
      return 'python';
    }
    if (text.includes('pip install')) {
      return 'bash';
    }
    if (text.includes('<html>') || text.includes('<div>')) {
      return 'html';
    }
    if (text.includes('namespace') || text.includes('class')) {
      return 'csharp';
    }
    // Adicione mais verificações conforme necessário
    return 'plaintext'; // Default fallback language
  }

  copyToClipboard(content: string) {
    const textarea = document.createElement('textarea');
    textarea.value = content;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    console.log('Code copied to clipboard:', content);
  }
}
