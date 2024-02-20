import { Quiz } from "../../quizes/models/quiz";

export interface IResults {
    quiz:Quiz,
    participants:Participant[]
}
export interface Participant{
    _id:string
    quiz:Quiz,
    participant:Iparticipant,
    score:number,
    started_at:Date
}
export interface Iparticipant{
    _id: string,
    first_name: string,
    last_name: string,
    email:string
}

export interface IcompletedQuiz {
    _id: string;
    code: string;
    title: string;
    description: string;
    status: string;
    instructor: string;
    group: string;
    questions_number: number;
    questions: string[];
    schadule: Date;
    participants: number;
    score_per_question: number;
    type: string;
    difficulty: string;
    closed_at: Date;
    createdAt: Date;
}
