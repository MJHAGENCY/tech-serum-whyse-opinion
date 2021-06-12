import { Component, OnInit } from '@angular/core';
import { Question, Doctor } from 'src/models/models';

@Component({
  selector: 'app-questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.scss']
})
export class QuestionsListComponent implements OnInit {
  questions: Question[] = [];

  constructor() { 
    let newQ: Question = new Question();
    newQ.questionText = "Is everyone removing ovaries for adenosarcoma? I have a 25 year old so kind of feel reticent to. No sarcomatous overgrowth described.";
    newQ.doctor = new Doctor();
    newQ.doctor.specialty = "Gynoc";
    newQ.doctor.careerStage = "Early Career";
    newQ.answers = [];
    this.questions.push(newQ);

    newQ = new Question();
    newQ.questionText = `Interested in recommendations from the WGO.

    I have a group of patients currently with stage 4 ovarian cancer. They have responded nicely to chemotherapy and surgey but haven’t quite normalized the CA 125 after 6-8 cycles of chemotherapy. 
    
    Are you all continuing with chemotherapy as long as the CA 125 is continouing to improve and the patient is tolerating treatment? Or do you assume that it’s not going to get to zero, and take a drug holiday? Or continue maintenance therapy ...`
    newQ.doctor.careerStage = "Late Career";
    newQ.doctor.specialty = "Gynoc";
    newQ.answers = [];
    this.questions.push(newQ);
  }

  ngOnInit(): void {
  }

}
