export class Question {
    questionTitle: string;
    questionText: string;
    doctor: Doctor;
    categories: Category[];
    answers: Answer[];
    dateTime: Date;
    constructor(){
        this.questionText = "";
        this.questionTitle = "";
        this.doctor = new Doctor();
        this.categories = [];
        this.answers = [];
        this.dateTime = new Date();
    }
}

export class Doctor {
    careerStage: string;
    specialty: string;
    constructor(){
        this.careerStage = "";
        this.specialty = "";
    }
}

export class Answer {
    answerText:string;
    doctor: Doctor;
    dateTime: Date;
    constructor(){
        this.answerText = "";
        this.doctor = new Doctor();
        this.dateTime = new Date();
    }
}

export class Category{
    categoryText: string;
    constructor(){
        this.categoryText = "";
    }
}