export interface IQuizStudent {
    title:string,
    code:string,
    description:string,
    group:string[],
    schadule:string,
    _id: string,
    duration: number,
    status: string,
    instructor: string,
   
    questions_number: number,
    questions:IQuistions [],

    
}
export interface IQuistions {
    title:string,
   options:Options,
    _id: string,

}
export interface Options {
   A:string,
   B:string,
   C:string,
   D:string,
    _id: string

}
