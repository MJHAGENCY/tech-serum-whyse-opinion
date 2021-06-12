import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';
import { Question } from 'src/models/models';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.scss']
})
export class QuestionDetailComponent implements OnInit {
  question = new Question();

  constructor(public questionSerivce:QuestionService) {
    this.question = questionSerivce.question;
   }

  ngOnInit(): void {
  }

}
