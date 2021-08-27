import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Layout, Row, Col } from 'antd';

import { RouterView } from './router';
import { Header } from './components';
import { RootState } from './store';

interface AppProps {}

const App: FC<AppProps> = () => {
  const { isLoggedIn } = useSelector((state: RootState) => state.user);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {isLoggedIn && (
        <Layout.Header style={{ background: '#ffffff', padding: 0 }}>
          <Row justify="center">
            <Col
              xs={{ span: 23 }}
              sm={{ span: 22 }}
              md={{ span: 18 }}
              lg={{ span: 16 }}
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
