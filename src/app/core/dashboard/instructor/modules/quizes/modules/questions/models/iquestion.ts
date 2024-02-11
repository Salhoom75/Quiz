export interface Iquestion {
    _id: string,
    title: string,
    description: string,
    options: IOptions
    answer: string,
    status: string,
    instructor: string,
    difficulty: string,
    points: number,
    type: string
}
export interface IOptions {
  _id:string
  A: string,
  B: string,
  C: string,
  D: string,
}


