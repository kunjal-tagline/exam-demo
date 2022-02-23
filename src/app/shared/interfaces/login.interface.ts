export interface Login {
    email: string;
    name: string;
    role:string;
    token:string;
  }
  
  export interface LoginResponse {
    statusCode: number;
    message: string;
    data: Login;
  }  
  