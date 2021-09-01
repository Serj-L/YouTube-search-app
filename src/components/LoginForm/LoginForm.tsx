import { FC, useState, useRef } from 'react';
import { Form, Input, Button } from 'antd';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';

import { IUserLoginInput } from '../../api/types';

import { LogoIcon } from '../Logo';

import styles from './LoginForm.module.css';

interface LoginFormProps {
  onSubmit: (values: IUserLoginInput) => void;
  initialValues: IUserLoginInput;
}

const stylesForInput = {
  fontFamily: 'Roboto, sans-serif',
  fontSize: 20,
  lineHeight: 0,
  borderRadius: 5,
  padding: '12px 15px',
};

const stylesForBtn = {
  fontFamily: 'Roboto, sans-serif',
  fontSize: 20,
  lineHeight: '100%',
  width: 170,
  height: 50,
  borderRadius: 5,
};

const LoginForm: FC<LoginFormProps> = ({
  onSubmit,
  initialValues,
}) => {
  const [passwordInputType, setPasswordInputType] = useState('password');
  const passwordInputRef = useRef<Input>(null);

  return (
    <div className={styles.wrapper}>
      <LogoIcon />
      <h3 className={styles.title}>Вход</h3>
      <Form
        className={styles.form}
        name="basic"
        initialValues={initialValues}
        layout="vertical"
        onFinish={onSubmit}
      >
        <span className={styles.label}>Логин</span>
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Введите логин' }]}
        >
          <Input
            className={styles.input}
            style={stylesForInput}
          />
        </Form.Item>

        <span className={styles.label}>Пароль</span>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Введите пароль' }]}
        >
          <div className={styles.inputWrapper}>
            {
              passwordInputType === 'password' ?
                <EyeInvisibleOutlined
                  className={styles.icon}
                  onClick={() => {
                    setPasswordInputType('text');
                    passwordInputRef.current?.focus();
                  }}
                /> :
                <EyeOutlined
                  className={styles.icon}
                  onClick={() =>{
                    setPasswordInputType('password');
                    passwordInputRef.current?.focus();
                  }}
                />
            }
            <Input
              className={styles.passwInput}
              style={stylesForInput}
              type={passwordInputType}
              ref={passwordInputRef}
            />
          </div>
        </Form.Item>

        <Form.Item >
          <div className={styles.btnWrapper}>
            <Button
              style={stylesForBtn}
              type="primary"
              htmlType="submit"
            >
              Войти
            </Button>
          </div>
        </Form.Item>

      </Form>
    </div>
  );
};

export default LoginForm;
