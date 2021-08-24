import { FC } from 'react';
import { Form, Input, Button } from 'antd';

import { IUserLoginInput } from '../../api/types';

import { LogoIcon } from '../Logo';

import styles from './LoginForm.module.css';

interface LoginFormProps {
  onSubmit: (values: IUserLoginInput) => void;
  initialValues: IUserLoginInput;
}

const LoginForm: FC<LoginFormProps> = ({
  onSubmit,
  initialValues,
}) => {
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
        <Form.Item
          label="Логин"
          name="username"
          rules={[{ required: true, message: 'Введите логин' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Пароль"
          name="password"
          rules={[{ required: true, message: 'Введите пароль' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item >
          <Button
            className={styles.btn}
            type="primary"
            htmlType="submit"
          >
          Войти
          </Button>
        </Form.Item>
      </Form>
    </div>

  );
};

export default LoginForm;
