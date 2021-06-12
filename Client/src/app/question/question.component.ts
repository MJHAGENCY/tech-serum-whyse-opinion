import { Component, OnInit, Input } from '@angular/core';
import { Question } from 'src/models/models';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  @Input()
  question: Question = new Question();

  followedStatus: boolean = false;
  follow(){
    this.followedStatus = !this.followedStatus;       
}

  constructor() { }

  ngOnInit(): void {
  }

}
