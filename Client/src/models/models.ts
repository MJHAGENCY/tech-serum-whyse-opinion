export class Question {
    questionTitle: string;
    questionText: string;
    doctor: Doctor;
    categories: Category[];
    constructor(){
        this.questionText = "";
        this.questionTitle = "";
        this.doctor = new Doctor();
        this.categories = [];
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
    constructor(){
        this.answerText = "";
    }
}

export class Category{
    categoryText: string;
    constructor(){
        this.categoryText = "";
    }
}