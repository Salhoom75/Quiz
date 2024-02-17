import { Student } from "../../students/models/student";

export interface Group {
  instructor: string;
  max_students: number;
  name: string;
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
