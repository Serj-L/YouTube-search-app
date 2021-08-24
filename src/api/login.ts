import users from './users.json';
import { IUserLoginInput, ILoginResponse } from './types';

export function login(data: IUserLoginInput): ILoginResponse | null {
  const user = users.find(u => u.username === data.username);

  if (user && user.password === data.password) {
    return {
      username: user.username,
      userId: user.userId,
    };
  }

  return null;
}
