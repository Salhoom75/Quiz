import { Student } from "../../students/models/student";

export interface Group {
  name:string;
  instructor: string;
  max_students: number,
  status: string;
  students: Student[];
  _id: string;
  pageSize: number;
  pageNumber: number;
}

export interface AddGroup {
  name: string;
  students: Student[];
}
