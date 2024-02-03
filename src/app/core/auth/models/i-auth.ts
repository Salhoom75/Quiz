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
  userName:{
    firstName:string,
    lastName:string
  },
  email:string,
  password:string,
  confirmPassword:string,
  phoneNumber:string,
  country:string,
  role:string,
  profileImage:string
}
