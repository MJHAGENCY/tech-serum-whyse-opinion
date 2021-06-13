import { Component, OnInit } from '@angular/core';
import { Question, Doctor, Answer, DataLoad } from 'src/models/models';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.scss']
})
export class QuestionsListComponent implements OnInit {
  questions: Question[] = [];

  constructor(private httpClient: HttpClient){}
  ngOnInit(){
    this.httpClient.get("assets/data.json").subscribe(data =>{
      console.log(data);
      this.questions = (data as DataLoad).questions;
    })
  }

}
