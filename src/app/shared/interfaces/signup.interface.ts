export interface ISignup {
  name: string;
  email: string;
  password: string;
  role: string;
}
export interface ISignUpResponse {
  statusCode: number;
  message: string;
  data: ISignup[];
}

export interface IRole{
  id:string;
  value:string;
} 