import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';

//Services
import { ChatService } from 'src/app/service/chat.service';
import { ApiService } from 'src/app/service/auth.service';
import { AzureParamsService } from 'src/app/service/azure-params.service';

//Types
import { IUser } from 'src/types/user';
import { IChat } from 'src/types/chats';


@Component({
  selector: 'app-dialog-chat-configuration',
  templateUrl: './dialog-chat-configuration.component.html',
  styleUrl: './dialog-chat-configuration.component.scss'
})
export class DialogChatConfigurationComponent implements OnInit {
  showParamsModal: boolean = false;

  azureParams: any = {
    search_params:{},
    llm_params:{},
  };

  constructor(
    private chatService: ChatService,
    private apiService: ApiService,
    private azureParamsService: AzureParamsService
  ) {}

  ngOnInit() {
    const currentUser: IUser | null = this.apiService.getCurrentUser();
    if (currentUser) {
      this.loadAzureParams();
    } else {
      console.error("Current user is not available");
    }

  }

  toggleDialogParams(){
    this.showParamsModal = !this.showParamsModal;
  }

  async updateParams() {
    this.toggleDialogParams()
    console.log("configurações de chat atualizadas")
  }

  async loadAzureParams() {
    try {
      this.azureParams = await this.apiService.getAzureParams();
      if (this.azureParams) {
        console.log('Loaded Azure Params:', this.azureParams);
      } else {
        console.error('Azure Params are undefined or null');
      }
    } catch (error) {
      console.error('Error loading Azure Params:', error);
    }
  }

}
