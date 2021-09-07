import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

export const firebaseApp = initializeApp({
  apiKey: 'AIzaSyByiMgQXzByXmCRjcsTm5RCadKOQ9SiiPA',
  authDomain: 'search-app-9c54b.firebaseapp.com',
  projectId: 'search-app-9c54b',
  storageBucket: 'search-app-9c54b.appspot.com',
  messagingSenderId: '533183716632',
  appId: '1:533183716632:web:a7efb5b5da647a9398526d',
});

export const dataBase = getFirestore();
