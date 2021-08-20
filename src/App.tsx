import { FC } from 'react';
import { useSelector } from 'react-redux';

import { RouterView } from './router';
import { Header } from './components';
import { RootState } from './store';

interface AppProps {}

const App: FC<AppProps> = () => {
  const { isLoggedIn } = useSelector((state: RootState) => state.user);

  return (
    <div>
      {isLoggedIn && <Header />}

      <RouterView />
    </div>
  );
};

export default App;
