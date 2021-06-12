import { Component, OnInit } from '@angular/core';
import { Question } from 'src/models/models';

@Component({
  selector: 'app-questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.scss']
})
export class QuestionsListComponent implements OnInit {
  questions: Question[] = [];

  constructor() { 
    let newQ: Question = new Question();
    newQ.questionText = "Test";
    this.questions.push(newQ);
  }

  ngOnInit(): void {
  }

}
