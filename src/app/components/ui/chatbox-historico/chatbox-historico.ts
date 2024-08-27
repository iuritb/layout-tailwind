//Angular
import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';

//Services
import { ChatService } from 'src/app/service/chat.service';
import { ApiService } from 'src/app/service/auth.service';
import { AzureParamsService } from 'src/app/service/azure-params.service';

//Types
import { IUser } from 'src/types/user';
import { IChat } from 'src/types/chats';

@Component({
  selector: 'app-chatbox-historico',
  templateUrl: './chatbox-historico.component.html',
  styleUrls: ['./chatbox-historico.component.scss'],
})
export class ChatboxHistoricoComponent implements OnInit {
  chatHistory: IChat[] = [];
  userName: string = '';
  indices: string[] = [];
  selectedIndex: string | null = null;
  azureParams: any = null;
  showParamsModal: boolean = false;

  @Output() newChat = new EventEmitter<void>();
  @Output() chatSelected = new EventEmitter<IChat>();
  @Output() selectedIndexChange = new EventEmitter<string>();
  @Input() chatCreated: EventEmitter<IChat> = new EventEmitter<IChat>();

  constructor(
    private chatService: ChatService,
    private apiService: ApiService,
    private azureParamsService: AzureParamsService
  ) {}

  ngOnInit() {
    const currentUser: IUser | null = this.apiService.getCurrentUser();
    if (currentUser) {
      this.userName = currentUser.name;
      this.loadUserChats(currentUser.id);
      this.loadIndices();
      this.loadAzureParams();
    }

    if (this.chatCreated) {
      this.chatCreated.subscribe((chat: IChat) => {
        this.addChat(chat);
      });
    }

    this.chatService.currentChat$.subscribe((chat) => {
      if (chat) {
        const index = this.chatHistory.findIndex((c) => c._id === chat._id);
        if (index !== -1) {
          this.chatHistory[index] = chat;
        }
      }
    });
  }

  loadUserChats(userId: string) {
    this.chatService
      .getUserChats(userId)
      .then((chats) => {
        this.chatHistory = chats;
        console.log('Loaded chats:', this.chatHistory);
        const currentChat = this.chatService.getCurrentChat();
        console.log('Current chat after loading chats:', currentChat);
      })
      .catch((error) => {
        console.error('Error loading user chats:', error);
      });
  }

  async loadIndices() {
    try {
      const indices = await this.apiService.getIndices();
      this.indices = indices;
      console.log('Loaded indices:', this.indices);
    } catch (error) {
      console.error('Error loading indices:', error);
    }
  }

  async loadAzureParams() {
    try {
      this.azureParams = await this.apiService.getAzureParams();
      console.log('Loaded Azure Params:', this.azureParams);
    } catch (error) {
      console.error('Error loading Azure Params:', error);
    }
  }

  startNewChat() {
    this.newChat.emit();
  }

  selectChat(chat: IChat) {
    this.chatService.setCurrentChat(chat);
    this.chatSelected.emit(chat);
  }

  addChat(chat: IChat) {
    this.chatHistory.push(chat);
  }

  onSelectIndex(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.selectedIndex = target.value;
    this.selectedIndexChange.emit(this.selectedIndex);
    console.log('Selected index:', this.selectedIndex);
  }

  showParams() {
    this.showParamsModal = true;
  }

  closeParamsModal() {
    this.showParamsModal = false;
  }

  async updateParams() {
    try {
      await this.azureParamsService.updateParams(this.azureParams);
      console.log('Updated Azure Params:', this.azureParams);
      this.closeParamsModal();
    } catch (error) {
      console.error('Error updating Azure Params:', error);
    }
  }
}
