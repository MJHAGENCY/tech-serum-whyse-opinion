import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { QuestionsListComponent } from './questions-list/questions-list.component';
import { AskAQuestionComponent } from './ask-a-question/ask-a-question.component';
import { ExpertPanelComponent } from './expert-panel/expert-panel.component';

const routes: Routes = [
  { path: '', component: QuestionsListComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'AskAQuestion', component: AskAQuestionComponent},
  { path: 'ExpertPanel', component: ExpertPanelComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
