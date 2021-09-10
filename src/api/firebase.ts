import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, setPersistence, browserLocalPersistence } from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';

import { IUserLoginInput, IFirebaseLoginResponse, IFavoritesFirebase } from './types';

import { dataBase } from '../firebaseInit';

const auth = getAuth();

setPersistence(auth, browserLocalPersistence);

export const userAuth = async (data: IUserLoginInput): Promise<IFirebaseLoginResponse> => {
  const { user } = data.isSignedForm ?
    await createUserWithEmailAndPassword(auth, data.userEmail, data.password) :
    await signInWithEmailAndPassword(auth, data.userEmail, data.password);

  return { uid: user.uid };
};

export const saveFavoritesToDb = async (favorites: IFavoritesFirebase) => {
  await setDoc(doc(dataBase, 'users', favorites.userId), { favorites: favorites.favorites });
};

export const getFavoritesFromDb = async (userId: string) => {
  const favorites = await getDoc(doc(dataBase, 'users', userId));
  return favorites.data();
};
