import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import App from './App';
import { store } from './store';

import './index.css';

ReactDOM.render(
  <ReduxProvider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </ReduxProvider>,
  document.getElementById('root'),
);
