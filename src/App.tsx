import { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Layout, Row, Col } from 'antd';

import { RootState } from './store';
import { setSavedFavorites } from './store/favoritesSlice';

import { RouterView } from './router';
import { Header } from './components';

interface AppProps {}

const App: FC<AppProps> = () => {
  const reduxDispatch = useDispatch();
  const { isLoggedIn, userId } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    const dataFromLocalStorage = localStorage.getItem(userId) || '';
    const favorites = dataFromLocalStorage ? JSON.parse(dataFromLocalStorage) : [];

    reduxDispatch(setSavedFavorites(favorites));
  });

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {isLoggedIn && (
        <Layout.Header style={{ background: '#ffffff', padding: 0 }}>
          <Row justify="center">
            <Col
              xs={{ span: 23 }}
              sm={{ span: 22 }}
              md={{ span: 22 }}
              lg={{ span: 20 }}
              xxl={{ span: 16 }}
            >
              <Header />
            </Col>
          </Row>
        </Layout.Header>
      )}

      <Layout.Content>
        <RouterView />
      </Layout.Content>
    </Layout>
  );
};

export default App;
