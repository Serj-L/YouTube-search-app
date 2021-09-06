import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

import { IUserLoginInput, IFirebaseLoginResponse } from './types';

export const getUserId = async (data: IUserLoginInput): Promise<IFirebaseLoginResponse> => {
  const auth = getAuth();

  const { user } = data.isSignedForm ?
    await createUserWithEmailAndPassword(auth, data.userEmail, data.password) :
    await signInWithEmailAndPassword(auth, data.userEmail, data.password);

  return { uid: user.uid };
};
