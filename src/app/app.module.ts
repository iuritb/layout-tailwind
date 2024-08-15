import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainContentComponent } from './views/main-content/main-content.component';
import { ChatMessagesComponent } from './components/ui/chat-messages/chat-messages.component';
import { ChatInputComponent } from './components/ui/chat-input/chat-input.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { ChatStarratingComponent } from './components/ui/chat-starrating/chat-starrating.component';

@NgModule({
  declarations: [
    AppComponent,
    MainContentComponent,
    ChatMessagesComponent,
    ChatInputComponent,
    NavbarComponent,
    SidebarComponent,
    StarRatingComponent,
    ChatStarratingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
