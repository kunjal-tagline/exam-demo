export interface StudentList {
  status: string;
  _id: number;
  name: string;
  email: string;
}

export interface StudentProfileDataInterface {
  email: string;
  name: string;
  role: string;
  _id: string;
}

export interface StudentProfileResponse {
  statusCode: number;
  message: string;
  data: StudentProfileDataInterface;
}

export interface StudentExamData {
  _id: string;
  notes: Array<string>;
  subjectName: string;
  email: string;
  Result: [];
}

export interface StudentExamListResponse {
  statusCode: number;
  message: string;
  data: StudentExamData[];
  userId: string;
}

export interface StudentViewExamDetails {
  options: Array<string>;
  _id: string;
  question: string;
}

export interface StudentExamPaperResponse {
  statusCode: number;
  message: string;
  data: StudentViewExamDetails[];
}
