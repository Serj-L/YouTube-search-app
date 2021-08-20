import { FC } from 'react';
import { Form, Input, Button } from 'antd';

import { IUserLoginInput } from '../../api/types';

interface LoginFormProps {
  onSubmit: (values: IUserLoginInput) => void;
  initialValues: IUserLoginInput;
}

const LoginForm: FC<LoginFormProps> = ({
  onSubmit,
  initialValues,
}) => {
  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={initialValues}
      layout="vertical"
      onFinish={onSubmit}
    >
      <Form.Item
        label="Логин"
        name="username"
        rules={[{ required: true, message: 'Введите ваше имя' }]}
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

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button
          type="primary"
          htmlType="submit"
        >
          Войти
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
