import { Component, Input, OnChanges, OnInit, SimpleChanges, OnDestroy } from '@angular/core';
import { ChatService } from 'src/app/service/chat.service';
import { MarkdownService } from 'ngx-markdown';
import { IChat } from 'src/types/chats';
import { Subscription } from 'rxjs';

interface RenderedMessage {
  user_message: string;
  assistant_message: string;
  rating: number;
  messageId: string;
}

@Component({
  selector: 'app-chatbot-messages',
  templateUrl: './chatbot-messages.component.html',
  styleUrls: ['./chatbot-messages.component.scss'],
})
export class ChatbotMessagesComponent implements OnInit, OnDestroy, OnChanges {
  @Input() chat: IChat | null = null;  // Recebe o chat selecionado
  messages: any[] = []; // Armazena as mensagens do chat
  renderedMessages: RenderedMessage[] = []; // Armazena as mensagens renderizadas (com Markdown/LaTeX)
  private messagesSubscription!: Subscription; // Subscription para o Observable de mensagens

  constructor(
    private chatService: ChatService,
    private markdownService: MarkdownService
  ) {}

  ngOnInit(): void {
    // Escuta as mensagens e renderiza quando há novas mensagens
    this.messagesSubscription = this.chatService.messages$.subscribe((messages) => {
      this.messages = messages;
      this.renderMessages(); // Atualiza a renderização quando as mensagens mudarem
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    // Se o chat foi alterado, carregue as mensagens
    if (changes['chat'] && this.chat) {
      console.log('Chat selecionado mudou, carregando mensagens...');
      this.loadMessages(this.chat._id);
    }
  }

  ngOnDestroy(): void {
    // Cancela a inscrição quando o componente é destruído
    if (this.messagesSubscription) {
      this.messagesSubscription.unsubscribe();
    }
  }

  async loadMessages(chatId: string) {
    try {
      // Carrega as mensagens do chat selecionado
      await this.chatService.getMessagesByChatId(chatId);
      // As mensagens serão automaticamente atualizadas através do BehaviorSubject (messages$)
    } catch (error) {
      console.error('Erro ao carregar mensagens:', error);
    }
  }

  async renderMessages() {
    this.renderedMessages = [];
    for (const message of this.messages) {
      const renderedMessage: RenderedMessage = {
        user_message: '',
        assistant_message: '',
        rating: message.assistant_message?.rating?.value || 0,
        messageId: message._id
      };

      if (message.user_message && message.user_message.content) {
        renderedMessage.user_message = await this.markdownService.parse(message.user_message.content);
      }

      if (message.assistant_message && message.assistant_message.content) {
        renderedMessage.assistant_message = await this.markdownService.parse(message.assistant_message.content);
      }

      this.renderedMessages.push(renderedMessage); // Adiciona o objeto ao array
    }
    this.reRenderMathJax();  // Re-renderiza fórmulas matemáticas, se houver
  }

  reRenderMathJax() {
    setTimeout(() => {
      if ((window as any).MathJax && (window as any).MathJax.typesetPromise) {
        (window as any).MathJax.typesetPromise().catch((err: any) =>
          console.log('Erro no MathJax:', err)
        );
      } else {
        console.log('MathJax não está disponível');
      }
    }, 0);
  }

  // Função chamada quando o rating é alterado no componente de avaliação de estrelas
  onRatingChange(messageId: string, rating: number): void {
    this.chatService.rateMessage(messageId, { value: rating, messageType: 'assistant' }).subscribe({
      next: (response) => {
        console.log('Rating atualizado com sucesso', response);
      },
      error: (error) => {
        console.error('Erro ao atualizar o rating:', error);
      }
    });
  }
}
