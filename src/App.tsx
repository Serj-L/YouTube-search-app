import { FC, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Layout, Row, Col } from 'antd';

import { RootState } from './store';
import { getFavoritesFromDbThunk, saveFavoritesToDbThunk } from './store/favoritesSlice';
import { setIsMobile } from './store/screenParamsSlice';

import { RouterView } from './router';
import { Header } from './components';

interface AppProps {}

const App: FC<AppProps> = () => {
  const reduxDispatch = useDispatch();
  const { userId } = useSelector((state: RootState) => state.user);
  const { favorites, updateDb } = useSelector((state: RootState) => state.favorites);
  const { isMobile } = useSelector((state: RootState) => state.screenParams);
  const [screenWidth, setScreenWidth] = useState<Number>(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [reduxDispatch]);

  useEffect(() => {
    if ((isMobile && screenWidth < 992) || (!isMobile && screenWidth >= 992)) return;

    reduxDispatch(setIsMobile(screenWidth < 992));
  }, [isMobile, screenWidth, reduxDispatch]);

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
        <Layout.Header
          style={{
            width: '100%',
            background: '#ffffff',
            padding: 0,
            zIndex: 2,
            position: isMobile ? 'fixed' : 'relative',
          }}>
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

      <Layout.Content style={{ marginTop: isMobile ? 64 : 0 }}>
        <RouterView />
      </Layout.Content>
    </Layout>
  );
};

export default App;
