import { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Layout, Row, Col } from 'antd';

import { RootState } from './store';
import { getFavoritesFromDbThunk, saveFavoritesToDbThunk } from './store/favoritesSlice';

import { RouterView } from './router';
import { Header } from './components';

interface AppProps {}

const App: FC<AppProps> = () => {
  const reduxDispatch = useDispatch();
  const { userId } = useSelector((state: RootState) => state.user);
  const { favorites, updateDb } = useSelector((state: RootState) => state.favorites);

  useEffect(() => {
    if (!userId) return;
    reduxDispatch(getFavoritesFromDbThunk(userId));
  }, [userId, reduxDispatch]);

  useEffect(() => {
    if (!updateDb) return;
    reduxDispatch(saveFavoritesToDbThunk({ favorites, userId }));
  }, [updateDb, favorites, userId, reduxDispatch]);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {userId && (
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
