export interface IStudentProfileData {
  email: string;
  name: string;
  role: string;
  _id: string;
}

export interface IStudentProfileResponse {
  statusCode: number;
  message: string;
  data: IStudentProfileData;
}

export interface IStudentExamData {
  _id: string;
  notes: string[];
  subjectName: string;
  email: string;
  Result: [];
}

export interface IStudentExamListResponse {
  statusCode: number;
  message: string;
  data: IStudentExamData[];
  userId: string;
}

export interface IStudentViewExamDetails {
  options: string[];
  _id: string;
  question: string;
}

export interface IStudentExamPaperResponse {
  statusCode: number;
  message: string;
  data: IStudentViewExamDetails[];
}
