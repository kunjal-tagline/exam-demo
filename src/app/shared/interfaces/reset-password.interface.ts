export interface IResetPasswordResponse {
  statusCode: number;
  message: string;
  data: IResetPasswordData;
}

export interface IResetPasswordData {
  name: string;
  email: string;
  id: string;
}
