import { FC, useState, useEffect, useMemo } from 'react';
import { Form, Input, InputNumber, Select, Button, Slider, Col, Row } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';

import { IFavoritesInput } from '../../api/types';

import styles from './FavoritesForm.module.css';

interface FavoritesFormProps {
  onSubmit: (values: IFavoritesInput) => void;
  onCancel: () => void;
  initialValues: IFavoritesInput;
  editMode?: boolean;
}

const stylesForInput = {
  fontFamily: 'Roboto, sans-serif',
  lineHeight: 0,
  fontSize: 20,
  borderRadius: 5,
  padding: '12px 15px',
};

const stylesForBtn = {
  fontFamily: 'Roboto, sans-serif',
  fontSize: 20,
  lineHeight: '100%',
  width: 210,
  height: 50,
  borderRadius: 5,
};

const FavoritesForm: FC<FavoritesFormProps> = ({
  onSubmit,
  onCancel,
  initialValues,
  editMode = false,
}) => {
  const [sliderInputValue, setSliderInputValue] = useState(12);
  const [form] = Form.useForm();
  const buttonTexts = useMemo(() => {
    return editMode ? { cancelBtn: 'Не изменять', okBtn: 'Изменить' } : { cancelBtn: 'Не сохранять', okBtn: 'Сохранить' };
  }, [editMode]);

  useEffect(() => {
    form.resetFields();
    setSliderInputValue(12);
  }, [form, initialValues]);

  return (
    <Form
      form={form}
      name='saveToFavorites'
      id='saveToFavorites'
      initialValues={initialValues}
      layout='vertical'
      onFinish={onSubmit}
    >
      <span className={styles.label}>Запрос</span>
      <Form.Item
        name='query'
        rules={[{ required: true, message: 'Введите запрос' }]}
      >
        <Input
          style={stylesForInput}
          type='text'
          disabled={!editMode}
        />
      </Form.Item>

      <span className={styles.label}><span style={{ color: 'red' }}>* </span>Название</span>
      <Form.Item
        name='title'
        rules={[{ required: true, message: 'Введите название' }]}
      >
        <Input
          placeholder='Укажите название'
          style={stylesForInput}
          type='text'
        />
      </Form.Item>

      <span className={styles.label}>Сортировать по</span>

      <Form.Item name='order'>
        <Select
          size='large'
          style={{
            fontFamily: 'Roboto, sans-serif',
            fontSize: 20,
          }}
          suffixIcon={<CaretDownOutlined />}
        >
          <Select.Option value='relevance'>Без сортировки</Select.Option>
          <Select.Option value='title'>По названию</Select.Option>
          <Select.Option value='date'>По дате релиза</Select.Option>
          <Select.Option value='viewCount'>По количеству просмотров</Select.Option>
          <Select.Option value='rating'>По рейтингу</Select.Option>
        </Select>
      </Form.Item>

      <span className={styles.label}>Максимальное количество</span>
      <Row align='middle'>
        <Col flex='auto'>
          <Form.Item name='resultsPerPage'>
            <Slider
              style={{ marginRight: 20 }}
              min={12}
              max={50}
              value={sliderInputValue}
              onChange={(value) => setSliderInputValue(value)}
            />
          </Form.Item>
        </Col>
        <Col flex='none'>
          <Form.Item name='resultsPerPage'>
            <InputNumber
              style={{
                fontFamily: 'Roboto, sans-serif',
                lineHeight: 0,
                fontSize: 20,
                borderRadius: 5,
                padding: '5px 0px 5px 20px',
              }}
              min={12}
              max={50}
              size='large'
              value={sliderInputValue}
              onChange={(value) => setSliderInputValue(value)}
            />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item >
        <div className={styles.btnWrapper}>
          <Button
            style={stylesForBtn}
            type='primary'
            ghost
            onClick={onCancel}
          >
            {buttonTexts.cancelBtn}
          </Button>
          <Button
            style={stylesForBtn}
            type='primary'
            htmlType='submit'
          >
            {buttonTexts.okBtn}
          </Button>
        </div>
      </Form.Item>
    </Form>
  );
};

export default FavoritesForm;
