import { FC } from 'react';
import { Empty, Row, Col } from 'antd';

const NotFoundScreen: FC = () => {
  return (
    <Row
      justify="center"
      align="middle"
      style={{ minHeight: '80vh' }}
    >
      <Col flex='auto'>
        <Empty description='Упс! Запрашиваемая Вами страница не найдена.'/>
      </Col>
    </Row>
  );
};

export default NotFoundScreen;
