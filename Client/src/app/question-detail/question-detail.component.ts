import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';
import { Question, Answer } from 'src/models/models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.scss']
})
export class QuestionDetailComponent implements OnInit {
  question: Question | undefined = undefined;

  likedAnswers: string[] = [];
  like(answer: Answer) {
    if(this.likedAnswers.indexOf(answer.doctor.username) == -1){
      this.likedAnswers.push(answer.doctor.username);
    }
    else{
      this.likedAnswers.splice(this.likedAnswers.indexOf(answer.doctor.username),1);
    }
  }
  likedStatus(answer: Answer){
    return this.likedAnswers.indexOf(answer.doctor.username) > -1;
  }

  constructor(public questionSerivce:QuestionService, private router: Router) {
    if(questionSerivce.question == undefined){
      this.router.navigateByUrl("");
    }
    else {
      this.question = questionSerivce.question;
    }
   }

  ngOnInit(): void {
  }

}
