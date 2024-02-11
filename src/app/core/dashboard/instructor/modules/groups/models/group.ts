export interface Group {
  instructor: string;
  max_students: number;
  name: string;
  status: string;
  students: string[];
  _id: string;
}

export interface addGroup {
  name: string;
  student_id: string[];
}
