import { Injectable } from '@angular/core';
import { Question } from 'src/models/models';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  question: Question = new Question();
  
  constructor() { 

  }

  questionDetail(question: Question){
    this.question = question;
  }
}
