export interface IQuiztable {
  _id: string;
  code: string;
  title: string;
  description: string;
  status: string;
  instructor: string;
  group: string;
  questions_number: number;
  questions: string[];

  schadule: string;
  duration: number;
  score_per_question: number;
  type: string;
  difficulty: string;
  updatedAt: Date;
  createdAt: Date;
  __v: number;
}
