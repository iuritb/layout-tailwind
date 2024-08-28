import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Taylwind layout components
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';

//Tailwind Ui components
import { ChatMessagesComponent } from './components/ui/chat-messages/chat-messages.component';
import { ChatInputComponent } from './components/ui/chat-input/chat-input.component';

//Tailwind view components
import { MainContentComponent } from './views/main-content/main-content.component';


//Sass layout components
import { ScssNavbarComponent } from './components/layout/scss-navbar/scss-navbar.component';
import { ScssSidebarComponent } from './components/layout/scss-sidebar/scss-sidebar.component';

//Sass Ui components
import { ScssChatComponent } from './components/ui/scss-chat/scss-chat.component';
import { ScssInputComponent } from './components/ui/scss-input/scss-input.component';

//Sass view components
import { ScssMainComponent } from './views/scss-main/scss-main.component';
import { LoginComponent } from './views/login/login.component';
import { CriarSenhaComponent } from './views/criar-senha/criar-senha.component';
import { VerificaMatriculaComponent } from './views/verifica-matricula/verifica-matricula.component';

//Other components
import { StarRatingComponent } from './components/ui/star-rating/star-rating.component';
import { ChatStarratingComponent } from './components/ui/chat-starrating/chat-starrating.component';
import { SidebarTailwindComponent } from './components/layout/sidebar-tailwind/sidebar-tailwind.component';




@NgModule({
  declarations: [
    AppComponent,
    MainContentComponent,
    ChatMessagesComponent,
    ChatInputComponent,
    NavbarComponent,
    SidebarComponent,
    StarRatingComponent,
    ChatStarratingComponent,
    ScssNavbarComponent,
    ScssSidebarComponent,
    ScssChatComponent,
    ScssInputComponent,
    ScssMainComponent,
    SidebarTailwindComponent,
    LoginComponent,
    CriarSenhaComponent,
    VerificaMatriculaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
