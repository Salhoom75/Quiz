import { Group } from "../../groups/models/group";


export interface Student {
    email:string,
    first_name:string,
    last_name : string,
  role: "Student",
    status: string,
    _id: string,
    group:Group[],
}


