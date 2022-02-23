export interface Signup {
  name: string;
  email: string;
  password: string;
  role: string;
}
export interface SignUpResponse {
  statusCode: number;
  message: string;
  data: Signup[];
}

export interface Role{
  id:string;
  value:string;
} 