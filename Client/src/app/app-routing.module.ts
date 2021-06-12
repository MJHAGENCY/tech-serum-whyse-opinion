import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { QuestionsListComponent } from './questions-list/questions-list.component';
import { AskAQuestionComponent } from './ask-a-question/ask-a-question.component';
import { ExpertPanelComponent } from './expert-panel/expert-panel.component';
import { MyQuestionsComponent } from './my-questions/my-questions.component';
import { QuestionDetailComponent } from './question-detail/question-detail.component';

const routes: Routes = [
  { path: '', component: QuestionsListComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'AskAQuestion', component: AskAQuestionComponent},
  { path: 'MyQuestions', component: MyQuestionsComponent},
  { path: 'ExpertPanel', component: ExpertPanelComponent},
  { path: 'QuestionDetail', component: QuestionDetailComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
