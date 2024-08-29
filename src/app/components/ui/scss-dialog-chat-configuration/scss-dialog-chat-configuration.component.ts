import { Component } from '@angular/core';

@Component({
  selector: 'app-scss-dialog-chat-configuration',
  templateUrl: './scss-dialog-chat-configuration.component.html',
  styleUrl: './scss-dialog-chat-configuration.component.scss'
})
export class ScssDialogChatConfigurationComponent {
  showParamsModal: boolean = false;

  showParams() {
    this.showParamsModal = true;
  }

  closeParamsModal() {
    this.showParamsModal = false;
  }

  async updateParams() {
    console.log("configurações de chat atualizadas")
  }

}
