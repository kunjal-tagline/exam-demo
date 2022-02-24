export interface IStudentData {
  status: string;
  _id: number;
  name: string;
  email: string;
}

export interface IAllStudentDataResponse {
  statusCode: number;
  message: string;
  data: IStudentData[];
}

export interface ITeacherViewProfileResponse {
  statusCode: number;
  message: string;
  data: ITeacherViewProfileData[];
}

export interface ITeacherViewProfileData {
  email: string;
  _id: string;
  name: string;
  Result: IStudentResult[];
}

export interface IStudentResult {
  _id: string;
  subjectName: string;
  studentId: string;
  resultStatus: string;
  __v: number;
  rank: number;
  score: number;
}

export interface ITeacherViewExamResponse {
  statusCode: number;
  message: string;
  data: ITeacherViewExamData[];
}

export interface ITeacherViewExamData {
  email: string;
  notes: string[];
  subjectName: string;
  __v: number;
  _id: string;
}

export interface ITeacherViewExamDetails {
  statusCode: string;
  message: string;
  data: ITeacherViewExamQuestions;
}

export interface ITeacherViewExamQuestions {
  questions: ITeacherViewExamQuestionData[];
}

export interface ITeacherViewExamQuestionData {
  options: string[];
  question: string;
  answer: string;
}
