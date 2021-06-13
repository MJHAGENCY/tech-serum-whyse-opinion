import { Component, OnInit, Input } from "@angular/core";
import { Question } from "src/models/models";
import { QuestionService } from "../question.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-question",
  templateUrl: "./question.component.html",
  styleUrls: ["./question.component.scss"],
})
export class QuestionComponent implements OnInit {
  @Input()
  question: Question = new Question();

  followedStatus: boolean = false;
  follow() {
    this.followedStatus = !this.followedStatus;
  }

  constructor(
    public questionService: QuestionService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  questionDetail() {
    this.questionService.question = this.question;
    this.router.navigateByUrl("/QuestionDetail");
  }
}
