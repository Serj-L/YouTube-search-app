import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { initializeApp } from 'firebase/app';

import App from './App';
import { store } from './store';

import './index.css';

export const firebaseApp = initializeApp({
  apiKey: 'AIzaSyByiMgQXzByXmCRjcsTm5RCadKOQ9SiiPA',
  authDomain: 'search-app-9c54b.firebaseapp.com',
  projectId: 'search-app-9c54b',
  storageBucket: 'search-app-9c54b.appspot.com',
  messagingSenderId: '533183716632',
  appId: '1:533183716632:web:a7efb5b5da647a9398526d',
});

ReactDOM.render(
  <ReduxProvider store={store}>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App />
    </BrowserRouter>
  </ReduxProvider>,
  document.getElementById('root'),
);
