
export class Question {
    questionText: string;
    doctor: Doctor;
    category: string;
    answers: Answer[];
    dateTime: string;
    likes: number;
    constructor(){
        this.questionText = "";
        this.doctor = new Doctor();
        this.category = "";
        this.answers = [];
        this.dateTime = "";
        this.likes = 0;
    }
}

export class Doctor {
    username: string;
    specialty: string;
    constructor(){
        this.username = "";
        this.specialty = "";
    }
}

export class Answer {
    answerText:string;
    doctor: Doctor;
    dateTime: string;
    likes: number;
    constructor(){
        this.answerText = "";
        this.doctor = new Doctor();
        this.dateTime = "";
        this.likes = 0;
    }
}

export class DataLoad {
    questions: Question[] = [];
}