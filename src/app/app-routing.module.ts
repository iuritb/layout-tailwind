import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './views/login/login.component';
import { CriarSenhaComponent } from './views/criar-senha/criar-senha.component';
import { VerificaMatriculaComponent } from './views/verifica-matricula/verifica-matricula.component';
import { ScssMainComponent } from './views/scss-main/scss-main.component';

const routes: Routes = [
  { path: '', redirectTo: 'verifica-matricula', pathMatch: 'full' },
  { path: 'verifica-matricula', component: VerificaMatriculaComponent },
  { path: 'login', component: LoginComponent },
  { path: 'criar-senha', component: CriarSenhaComponent },
  { path: 'chat', component: ScssMainComponent },
  { path: '**', redirectTo: 'verifica-matricula' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
