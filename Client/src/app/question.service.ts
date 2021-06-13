import { Injectable } from '@angular/core';
import { Question } from 'src/models/models';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  question: Question | undefined = undefined;
  
  constructor() { 
  }

  questionDetail(question: Question){
    this.question = question;
  }
}
