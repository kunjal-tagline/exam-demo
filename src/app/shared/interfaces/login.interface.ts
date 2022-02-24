export interface ILogin {
    email: string;
    name: string;
    role:string;
    token:string;
  }
  
  export interface ILoginResponse {
    statusCode: number;
    message: string;
    data: ILogin;
  }  
  