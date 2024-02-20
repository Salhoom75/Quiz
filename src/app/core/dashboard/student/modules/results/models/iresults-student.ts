import { Quiz } from "src/app/core/dashboard/instructor/modules/quizes/models/quiz";
import { Iparticipant } from "src/app/core/dashboard/instructor/modules/results/models/results";

export interface IResultsStudent {
    quiz:Quiz,
    result:IResult
}
export interface IResult {
    quiz:Quiz,
    score:number,
    participant:Iparticipant
}
