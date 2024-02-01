export interface IAuth {}

export interface ILogin {
  email: string;
  password: string;
}
export interface IReset {
  email: string;
  OTP: string;
  password: string;
  confirmPassword: string;
}
