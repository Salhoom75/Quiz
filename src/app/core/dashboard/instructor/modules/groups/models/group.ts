export interface Group {
  instructor: string;
  max_students: number;
  name: string;
  status: string;
  students: string[];
  _id: string;
  pageSize: number;
  pageNumber: number;
}

export interface AddGroup {
  name: string;
  students: string[];
}
