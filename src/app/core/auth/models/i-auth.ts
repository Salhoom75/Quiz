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
export interface ILogin {
    email:string,
    password:string
}

export interface IRegister{
    first_name:string,
    last_name:string,
    email:string,
    password:string,
    role:string
}
