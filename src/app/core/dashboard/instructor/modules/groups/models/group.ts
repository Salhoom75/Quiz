export interface Group {
  name:string;
  instructor: string;
  max_students: number,
  
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
