export interface IAuth {}

export interface ILogin {
  email: string;
  password: string;
}
export interface IChange {
  password: string;
  password_new: string;
}
export interface IReset {
  otp: string;
  email: string;
  password: string;
}
export interface ILogin {
  email: string;
  password: string;
}


export interface IRegister{
    first_name:string,
    last_name:string,
    email:string,
    password:string,
    role:string

}
