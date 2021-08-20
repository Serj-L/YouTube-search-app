export interface IUserLoginInput {
  username: string;
  password: string;
}

export interface ILoginResponse {
  username: string;
  token: string;
}
