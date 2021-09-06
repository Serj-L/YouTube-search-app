import { FC, useEffect, useState } from 'react';
import { Col, Row } from 'antd';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../store';
import { getUserIdThunk } from '../../store/userSlice';

import { LoginForm } from '../../components';
import { IUserLoginInput } from '../../api/types';

interface LoginScreenProps {}

const LoginScreen: FC<LoginScreenProps> = () => {
  const routeHistory = useHistory();
  const reduxDispatch = useDispatch();
  const { userId } = useSelector((state: RootState) => state.user);
  const [isSignedForm, setIsSignedForm] = useState(false);

  useEffect(() => {
    if (!userId) return;
    routeHistory.push('/');
  }, [routeHistory, userId]);

  const onSubmit = (data: IUserLoginInput) => {
    reduxDispatch(getUserIdThunk(data));
  };

  const onSwitchChange = () => {
    setIsSignedForm(!isSignedForm);
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
          initialValues={{ userEmail: '', password: '', isSignedForm: false }}
          onSubmit={onSubmit}
          onSwitchChange={onSwitchChange}
          isSignedForm={isSignedForm}
        />
      </Col>
    </Row>
  );
};

export default LoginScreen;
