import { FC } from 'react';
import { message, Col, Row } from 'antd';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { LoginForm } from '../../components';
import { login } from '../../api/login';
import { IUserLoginInput } from '../../api/types';
import { setIsLoggedIn, setUserId } from '../../store/userSlice';

interface LoginScreenProps {}

const LoginScreen: FC<LoginScreenProps> = () => {
  const routeHistory = useHistory();
  const reduxDispatch = useDispatch();

  const onSubmit = (data: IUserLoginInput) => {
    const user = login(data);

    if (!user) {
      message.error('Ошибка авторизации');
      localStorage.removeItem('authToken');
      reduxDispatch(setIsLoggedIn(false));
      reduxDispatch(setUserId(''));
      return;
    }

    localStorage.setItem('authToken', user.userId);
    reduxDispatch(setIsLoggedIn(true));
    reduxDispatch(setUserId(user.userId));
    routeHistory.push('/');
  };

  return (
    <Row
      justify="center"
      align="middle"
      style={{ height: '100vh' }}
    >
      <Col
        xs={{ span: 23 }}
        sm={{ span: 22 }}
        md={{ span: 22 }}
        lg={{ span: 20 }}
        xxl={{ span: 16 }}
        style={{ maxWidth: 510 }}
      >
        <LoginForm
          initialValues={{ username: '', password: '' }}
          onSubmit={onSubmit}
        />
      </Col>
    </Row>
  );
};

export default LoginScreen;
